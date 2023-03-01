import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Form } from "react-bootstrap";
import "./table.css";
import {
  actionGetInfo,
  actionGetInfoByName,
} from "../../Redux/Actions/actionGetInfo";
import Loading from "../../Component/Loading/Loading";

export default function Home() {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("FileName")
  const [loading, setLoading] = useState(true);
  const filesArray = useSelector((state) => state.reducerResGetInfo.data);
  let filteredArray = useSelector((state) => state.reducerResGetInfoByName.data)

  if (!Array.isArray(filteredArray)) {
    filteredArray = [filteredArray];
  }

  useEffect(() => {
    if (selectedValue === "FileName") {
      dispatch(actionGetInfo());
    } else {
      dispatch(actionGetInfoByName(selectedValue));
    }
  }, [selectedValue, dispatch]);

  useEffect(() => {
    if (filesArray.length > 0) {
      setLoading(false);
    }
  }, [filesArray]);

  if (loading) {
    return <Loading />;
  }

  function handleChange(e) {
    const newSelectedValue = e.target.value;
    setSelectedValue(newSelectedValue)
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Control
                onChange={(e) => handleChange(e)}
                as="select"
                defaultValue={selectedValue}
              >
                <option value="FileName">File Name</option>
                {filesArray.map((file, i) => (
                  <option key={i} value={file.file}>
                    {console.log(file)}
                    {file.file}
                  </option>
                ))}
              </Form.Control>
            </th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
        {selectedValue === "FileName" ? 
        filesArray.map((file, fileIndex) =>
              file.lines &&
              file.lines.map((line, lineIndex) => (
                <tr key={`${fileIndex}-${lineIndex}`}>
                  <td>{file.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              ))
            )
          : filteredArray.length > 0 && filteredArray[0].lines.map((line, lineIndex) => (
              <tr key={`${lineIndex}`}>
                <td>{filteredArray[0].file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
