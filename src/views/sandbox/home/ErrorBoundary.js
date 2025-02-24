import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 以便下一个渲染展示回退 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 可以在这里记录错误信息，比如发送到一个错误报告服务
    console.error('Error caught by Error Boundary: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义回退 UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
