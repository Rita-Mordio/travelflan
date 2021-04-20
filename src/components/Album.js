import React from "react";

import {Card, Image, Button, Icon} from "semantic-ui-react";

const Album = ({ title, no }) => {

  const editAlbum = () => {

  }

  return(
    <Card>
      <Image src='http://placehold.it/300x200' />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <p>No.<span>{no}</span></p>
        <Button icon>
          <Icon name='delete' />
        </Button>
        <Button icon onClick={editAlbum}>
          <Icon name='edit' />
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Album