import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  ID: number;
  Name: string;
  Email: string;
  CreateTime: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<string | null>;
  register: (email: string, password: string, name?: string) => Promise<string | null>;
  logout: () => Promise<void>;
  sendResetPasswordEmail: (email: string) => Promise<string | null>;
  resetPassword: (token: string, password: string) => Promise<string | null>;
  checkAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = async () => {
    try {
      const { data, error } = await window.ezsite.apis.getUserInfo();
      if (error) {
        console.log('User not authenticated:', error);
        setUser(null);
      } else {
        setUser(data);
      }
    } catch (error) {
      console.log('Auth check failed:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.login({ email, password });
      if (error) {
        return error;
      }
      await checkAuthStatus();
      return null;
    } catch (error) {
      return 'Login failed. Please try again.';
    }
  };

  const register = async (email: string, password: string, name?: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.register({ email, password, name });
      if (error) {
        return error;
      }
      return null;
    } catch (error) {
      return 'Registration failed. Please try again.';
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await window.ezsite.apis.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
    }
  };

  const sendResetPasswordEmail = async (email: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.sendResetPwdEmail({ email });
      return error || null;
    } catch (error) {
      return 'Failed to send reset email. Please try again.';
    }
  };

  const resetPassword = async (token: string, password: string): Promise<string | null> => {
    try {
      const { error } = await window.ezsite.apis.resetPassword({ token, password });
      return error || null;
    } catch (error) {
      return 'Password reset failed. Please try again.';
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    sendResetPasswordEmail,
    resetPassword,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value} data-id="yl2f2nazo" data-path="src/contexts/AuthContext.tsx">
      {children}
    </AuthContext.Provider>);

};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};