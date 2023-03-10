function Nav() {
  return (
    <div className="relative z-30">
      <div className="border-b-2 border-b-sky-400 Nav">
        {/* <div className="w-48 mx-40"></div> */}
        <div className="NavItem text-white p-2 BoxFit">
          <li className="">Home</li>
        </div>
        <div className="NavItem text-white p-2 BoxFit">
          <li className="">Get Key</li>
        </div>
        <div className="NavItem text-white p-2 BoxFit">
          <li className="">Prompts</li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
