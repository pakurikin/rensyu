import React from "react";

const Styles: { [key: string]: React.CSSProperties } = {
    button: {
        margin: "1rem",
    },
};

// サンプルButtonのコンポーネント
const Button: React.FC = () => {
    return <button style={Styles.button}>hoge</button>;
};

export default Button;
