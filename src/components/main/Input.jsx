const Input = () => {
  const getAlert = (a) => {
    if (a.target.value.length > 9) {
      alert("Warning! Chacracter Max Lenght is 10");
    }
  };

  return (
    <div>
      <input type="text" onChange={getAlert} />
    </div>
  );
};

export default Input;
