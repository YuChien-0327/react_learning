export const Input = ({id, text, value, onChangeHandler}) => {
  return (
    <>
        <label htmlFor={id} className="input-label"> {text} </label>
        <input type="text" id={id} value={value} onChange={
            onChangeHandler
        }/>
    </>

  );
}