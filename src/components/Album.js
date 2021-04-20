import React from "react";

import {Card, Image} from "semantic-ui-react";

const Album = ({ title, no }) => {
  return(
    <Card>
      <Image src='http://placehold.it/300x200' />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <p>No.<span>{no}</span></p>
      </Card.Content>
    </Card>
  )
}

export default Album