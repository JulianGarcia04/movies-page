"use client";

import React, { ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  public constructor(props: Props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  public static getDerivedStateFromError(): { hasError: true } {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can use your own error logging service here
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });
  }

  public override render(): React.ReactNode {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
