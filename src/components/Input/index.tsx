import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "./styles.module.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      //   marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    },
    input: {
      color: "red"
    }
  })
);

// Props used by component
interface Props {
  label: string;
  name: string;
  onChange(value: string): void;
}

export default function InputField({ label, name, onChange }: Props) {
  const classes = useStyles();
  const [state, setState] = React.useState("");

  React.useEffect(() => {
    // on change state
    onChange(state);
    // eslint-disable-next-line
  }, [state]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // on change setState
    event.preventDefault()
    setState(event.target.value);
  };

  return (
    <div className={styles.container}>
      <FormControl>
        <TextField
          autoFocus
          label={label}
          name={name}
          value={state}
          onChange={handleChange}
          className={styles.textField}
          color="secondary"
          InputProps={{
            className: classes.input
          }}
        />
      </FormControl>
    </div>
  );
}
