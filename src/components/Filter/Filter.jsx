import classes from "./Filter.module.css";

const Filter = (props) => {
  return (
    <div className={classes.container}>
      <label className={classes.title} htmlFor={classes.list}>
        Category :
      </label>
      <select id={classes.list} onChange={props.filter}>
        <option className={classes.item} value="All">
          All
        </option>
        <option className={classes.item} value="Smart Phone">
          Smart Phone
        </option>
        <option className={classes.item} value="Smart Tv">
          Smart TV
        </option>
        <option className={classes.item} value="Smart Watch">
          Smart Watch
        </option>
      </select>
    </div>
  );
};

export default Filter;
