import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import styles from "./styles.module.css";
import clsx from "clsx";
import Select from "../../atoms/select/componen";
import SearchInput from "../../atoms/searchinput/componen";
import Button from "../../atoms/button/component";

type FormProps = {
  className?: string;
};

function Form(props: FormProps) {
  const { className } = props;

  const plotOptions = [
    { value: "short", label: "Small Plot" },
    { value: "full", label: "Full Plot" },
  ];

  const navigation = useNavigate({ from: "/" });

  function updateSearchParams(search: string, plotSize: string) {
    navigation({
      search: (prev) => ({
        ...prev,
        search,
        plotSize,
      }),
      to: "/",
    });
  }

  const form = useForm({
    defaultValues: {
      searchInput: "",
      plotSize: "full",
    },
    onSubmit: ({ value }) => {
      updateSearchParams(value.searchInput, value.plotSize);
    },
  });

  return (
    <div className={clsx(styles.form, className)}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className={styles.inputSection}>
          <form.Field
            name="plotSize"
            children={(field) => (
              <Select
                id="plotSize"
                title="Select a plot size"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                options={plotOptions}
              />
            )}
          />
          <form.Field
            name="searchInput"
            children={(field) => (
              <SearchInput
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
          <Button
            title="Search movies"
            aria-label="Search movies"
            type="submit"
            icon={true}
          />
        </div>
      </form>
    </div>
  );
}
export default Form;
