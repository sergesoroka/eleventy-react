import React, { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2 onClick={setOpen(() => !open)}>Open me</h2>
      {open && <p>See me?</p>}
    </div>
  );
}
