import { Card, Stack, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react'

function NextTrip() {
    return (
        <div>
            <div>
            <Heading size='lg' fontWeight={500} ml={118} mt={75} mb={30}>Inspiration for your next trip</Heading>
                <div className="cards">
                <SimpleGrid spacing={4}  templateColumns='repeat(auto-fill, minmax(200px, 1fr))' style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"auto"}}>
                    <Card  w={270} bg="#FF0080">
                        <Image
                            src='https://sandtontimes.co.za/wp-content/uploads/2022/08/sandtontimes-sandton-towers-hotel-exterior-2000x1125-1.jpg'
                            alt='Green double couch with wooden legs'
                            h={200}
                        />
                        <Stack mt='6' spacing='3' pl={2} >
                            <Heading size='md' color={"white"}>Sandton City<br/> Hotel</Heading>
                            <Text mb={35} color={"white"}>
                                53km
                            </Text>
                        </Stack>
                    </Card>

                    <Card  w={270} bg="#FF5B00">
                        <Image src='https://www.doreebonner.co.uk/wp-content/uploads/2023/07/moving-to-johannesburg.jpg'
                            alt='Green double couch with wooden legs'
                            h={200}
                        />
                        <Stack mt='6' spacing='3' pl={2} >
                            <Heading color={"white"} size='md'>Joburg City<br/> Hotel</Heading>
                            <Text color={"white"} mb={35}>
                                53km
                            </Text>
                        </Stack>
                    </Card>

                    <Card  w={270} bg="#e30f8ece">
                        <Image
                           src='https://images.trvl-media.com/lodging/35000000/34160000/34157500/34157423/4aa4f745.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium'
                                
                            alt='Green double couch with wooden legs'
                            h={200}
                        />
                        <Stack mt='6' spacing='3' pl={2} >
                            <Heading color={"white"} size='md'>Woodmead City<br/> Hotel</Heading>
                            <Text color={"white"} mb={35}>
                                53km
                            </Text>
                        </Stack>
                    </Card>

                    <Card  w={270} bg="#FF0080">
                        <Image
                          src='https://cdn.audleytravel.com/3959/2826/79/1029099-cape-town.jpg'
                            alt='Green double couch with wooden legs'
                            h={200}
                        />
                        <Stack mt='6' spacing='3' pl={2} >
                            <Heading color={"white"} size='md'>Hyde Park<br/> Hotel</Heading>
                            <Text color={"white"} mb={35}>
                                53km
                            </Text>
                        </Stack>
                    </Card>
                    </SimpleGrid>
                </div>
            </div>
        </div>
    )
}

export default NextTrip
