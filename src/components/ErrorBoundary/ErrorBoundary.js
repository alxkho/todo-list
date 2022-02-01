import React from "react";
import "./ErrorBoundary.css"

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        //logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>
                        Oops! Something went wrong :(
                    </h2>
                    <p>
                        You may also refresh the page or try again later
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

