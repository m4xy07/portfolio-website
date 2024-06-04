import React, { useState, useEffect } from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
}));


export const Content = () => {
    const classes = useStyles();
    const sentences = [
        "Enthusiastic BTech CSE student",
        "from India",
        "💖 crafting elegant solutions to complex problems",
        "pursuing my love to code",
        "Take a look at my projects 👉",
        "Exploring new technologies",
        "Coffee fueled and ready to code. ☕",
        "Open to new opportunities",
    ];
    const [index, setIndex] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const timer = setInterval(() => {     
            setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecrypt text={`${Resume.basics.x_title} ${FirstName}👋`} />
            </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                <TextDecrypt text={sentences[index]} />
            </Typography>
        </Container>
    );
};
