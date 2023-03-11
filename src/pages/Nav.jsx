function Nav() {
  return (
    <div className="relative z-30">
      <div className="border-b-2 border-b-Couch Nav">
        {/* <div className="w-48 mx-40"></div> */}
        <div className="NavItem hover:text-green-500 text-white p-2 BoxFit">
          <li>
            <a href="https://andregpt.vercel.app">Home</a>
          </li>
        </div>

        <div className="NavItem hover:text-Couch text-white p-2 BoxFit">
          <li>
            <a href="https://beta.openai.com/account/api-keys">
              <span className="hover:text-green-500">Get </span>
              <span className="hover:text-Carpet">Key</span>
            </a>
          </li>
        </div>
        {/* <div className="NavItem text-white p-2 BoxFit">
          <li>Prompts</li>
        </div> */}
      </div>
    </div>
  );
}

export default Nav;
