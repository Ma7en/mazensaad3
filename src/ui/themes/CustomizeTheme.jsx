export default function CustomizeTheme() {
    // const navigate = useNavigate();

    return (
        <>
            <div className="customize-theme">
                <div className="card">
                    <h2>customize your view</h2>
                    <p>manage your font size, color, and background</p>

                    <div className="font-size">
                        <h3>font size</h3>
                        <div>
                            <h6>Aa</h6>
                            <div className="choose-size">
                                <span className="font-size-1" />
                                <span className="font-size-2" />
                                <span className="font-size-3 active" />
                                <span className="font-size-4" />
                            </div>
                            <h3>Aa</h3>
                        </div>
                    </div>

                    <div className="color">
                        <h3>color</h3>
                        <div className="choose-color">
                            <span className="color-1" />
                            <span className="color-2" />
                            <span className="color-3 active" />
                            <span className="color-4" />
                            <span className="color-5" />
                        </div>
                    </div>

                    <div className="background">
                        <h3>background</h3>
                        <div className="choose-bg">
                            <div className="bg-1 active">
                                <span />
                                <h5 htmlFor="bg-1">light</h5>
                            </div>
                            <div className="bg-2">
                                <span />
                                <h5 htmlFor="bg-2">dim</h5>
                            </div>
                            <div className="bg-3">
                                <span />
                                <h5 htmlFor="bg-3">dark</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
