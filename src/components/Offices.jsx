import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Canada" invert={invert}>
        12885 80 Ave #207
          <br />
          Surrey, BC
        </Office>
      </li>
      <li>
      <Office name="Email" invert={invert}>
       mkaushal@kaushallaw.com
          <br />

        </Office>
      </li>
      <li>
      <Office name="Telephone" invert={invert}>
      (604) 503-5777
          <br />

        </Office>
      </li>
    </ul>
  );
};


const Telephone = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
       
       
      </li>
      <li>
     
      </li>
    </ul>
  );
};


export default Offices;
