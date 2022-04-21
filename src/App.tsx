import { useState, useMemo } from "react";
import { Provider, defaultTheme, Button, Well } from "@adobe/react-spectrum";
import {
  SpectrumCells,
  SpectrumRenderers,
} from "ez-aem-jsonforms-react-spectrum-renderers";
import { JsonForms } from "@jsonforms/react";
import schema from "./schema.json";
import uischema from "./uischema.json";

export function App() {
  const initialData = {};

  const [data, setData] = useState(initialData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);
  const clearData = () => {
    setData({});
  };

  return (
    <Provider theme={defaultTheme}>
      <Well>{stringifiedData}</Well>
      <br />
      <Button onPress={clearData} variant="cta">
        Clear Data
      </Button>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={SpectrumRenderers}
        cells={SpectrumCells}
        onChange={({ errors, data }) => setData(data)}
      />
    </Provider>
  );
}
