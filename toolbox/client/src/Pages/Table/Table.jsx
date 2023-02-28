import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import "./table.css"
import { actionGetInfo } from "../../Redux/Actions/actionGetInfo";
import Loading from "../../Component/Loading/Loading";

export default function Home() {
  const dispatch = useDispatch()
  const filesArray = useSelector((state) => state.reducerResGetInfo.data)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(actionGetInfo())
  }, [dispatch])

  useEffect(() => {
    if(filesArray.length > 0){
        setLoading(false)
    }
}, [filesArray])

  if(loading){return <Loading/>}

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
      {filesArray.map((file, fileIndex) => (
          file.lines.map((line, lineIndex) => (
            <tr key={`${fileIndex}-${lineIndex}`}>
              <td>{file.file}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))
        ))}
      </tbody>
    </Table>
    </>
  )
}
