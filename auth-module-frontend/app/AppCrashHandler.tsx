import { Component, type ErrorInfo } from "react";
import PopUp from "~/auth/shared/pop-up";

const DEFAULT_ERROR_MESSAGE = "Something went wrong, please try again later";

type ErrorBoundaryProps = {
    children: React.ReactNode;
    errorMessage?: string;
};

type State = {
    hasError: boolean;
}

class AppCrashHandler extends Component<ErrorBoundaryProps, State> {
    public state: State = {
        hasError: false
    };

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        setTimeout(()=>{
            this.setState({ hasError: false });
        },2000)
        console.error(error, errorInfo);
    }

    render() {
        return <>
            { this.state.hasError && (
                <PopUp text={DEFAULT_ERROR_MESSAGE}></PopUp>
            )}
            {this.props.children}
        </>;
    }
}

export { AppCrashHandler };