import React from "react";
import MDEditor from "@uiw/react-md-editor";

import { Button } from "@/components/ui/button";

export default function MDXEditor() {
  const [value, setValue] = React.useState("");

  const handleChange = (value?: string | undefined) => {
    setValue(value ?? "");
  };

  const handleSave = () => {
    console.log();
  };

  return (
    <div className="container">
      <MDEditor value={value} onChange={handleChange} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      <Button variant="default" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
