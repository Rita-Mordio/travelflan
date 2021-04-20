import React from "react";

import {Card, Image} from "semantic-ui-react";

const Album = () => {
  return(
    <Card>
      <Image src='http://placehold.it/300x200' />
      <Card.Content>
        <Card.Header>album title</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default Album