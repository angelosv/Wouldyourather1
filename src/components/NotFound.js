import React from "react"
import { Card, CardBody, CardHeader} from 'reactstrap';
import CardTitle from "reactstrap/es/CardTitle";

const NotFound = ({ history }) => (
  <Card>
    <CardHeader>404</CardHeader>
    <CardBody>
      <CardTitle>Page Not Found</CardTitle>

    </CardBody>
  </Card>
);



export default NotFound
