import React from "react";
import { Link } from "react-router-dom";
export default function OtherPage() {
  return (
    <div>
      In some other page
      <Link to="/">GO back to home page</Link>
    </div>
  );
}
