const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Page</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="message"
        />
        <button className=" m-2 p-2 text-white bg-red-500 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
