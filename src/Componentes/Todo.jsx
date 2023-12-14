import { CardBody, Button, Box, Text, Card } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";


export default function Todo  ({id, nombre, cerrar}) { 

    return (
    <Box style={{marginTop: "25px"}}> 
        <Card style={{ margin: "auto", width: "50%"}} key={id}>
            <CardBody>
                <Text>
                {nombre}
                </Text>
        <Button>
            <Icon as={CheckIcon}/>
        </Button>
        <Button onClick={() => cerrar(id)}> 
            <Icon as={DeleteIcon}/>
        </Button>
    </CardBody>
    </Card>
    </Box>
    );
}

