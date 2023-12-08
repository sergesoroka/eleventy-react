import React, { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>Open me</button>
      {open && <p>See me?</p>}
    </div>
  );
}
