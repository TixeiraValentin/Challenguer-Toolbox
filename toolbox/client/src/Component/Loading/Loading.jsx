import "./loading.css"
import { Spinner } from "react-bootstrap";

export default function Loading() {
return (
    <div className="containerLoading">
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
  )
}
