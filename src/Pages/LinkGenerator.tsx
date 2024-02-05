import React, { UIEvent, useRef, useState, useEffect } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
  SlideFade, 
  Button,
  ScaleFade,
  Input,
  Select,
  Textarea
} from "@chakra-ui/react";

type Props = {
};

function LinkGenerator() {
    const [tamuUndangan, setTamuUndangan] = useState<string>("");
    const [pasanganTamu, setPasanganTamu] = useState<string>("");
    const [tipeUndangan, setTipeUndangan] = useState<string>("");
    const [link, setLink] = useState<string>("");

    const [valueBox, setValueBox] = useState<string>("");

    useEffect(() => {
        document.title = "Sandy & Graha | #HAtiuntukberSANDar";

        if(tamuUndangan && pasanganTamu)
        {
            const tamuLink = tamuUndangan.split(" "); 
            const pasanganLink = pasanganTamu.split(" "); 
            
            
            const linkTemp = "https://hatiuntukbersandar.com/cover?d=" +
                            `${tipeUndangan}` +
                            "&to=" + 
                            `${tamuLink.map((item: any, index: number) => (
                                    `${item}` + "%20"
                            ))}` + 
                            "&" +
                            "partner=" +
                            `${pasanganTamu === "0" ? ("0"):(
                                `${pasanganLink.map((item: any, index: number) => ( `${item}` + "%20" ))}`
                            )}` ;
            const linkRemoveComma = linkTemp.replaceAll(",","")
            setLink(linkRemoveComma);
        }
      }, [tamuUndangan, pasanganTamu]);


    const handleBuatUndangan = (namaTamu: string, pasTamu: string,  tipe:string) => {
        if(link)
        {
            setValueBox(
                "Kepada Yth : \n\n" +
                `*${namaTamu}` + 
                `${pasTamu == "0" ? ("*"):(" & " + `${pasTamu}*`)}` +
                "\n\nDengan memohon Rahmat dan Ridho ﷲ SWT, serta dengan segenap kerendahan hati, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk dapat menghadiri acara pernikahan putra putri kami:" +
                "\n\n*Rr. Sandy Sitia Nur Annisa*" +
                "\n *&* " + 
                "\n*R. Muhammad Graha Eryck Pratama*" +
                "\n\nUntuk Info Detail Acara, Lokasi, dan Waktu Lebih Lengkap bisa akses link undangan online berikut : \n\n" +
                `${link}` +
                "\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu untuk keberkahan kedua mempelai." +
                "\n\nKarena adanya keterbatasan jarak dan waktu, kami tidak dapat mengirimkan undangan ini secara langsung, maka melalui e-invitation ini kami harap dapat menjadi pengganti undangan resmi sehingga tujuan kami tersampaikan." +
                "\nAtas doa restu Bapak/Ibu/Saudara/i kami ucapkan terimakasih." +
                "\n\nKami yang berbahagia\n" +
                "\nSandy & Graha\n"+
                "\nWassallamu'alaikum Warahmatullahi Wabarakatuh."
            )
        }
    }
    
    return (
        <>
        <Box 
            maxW={"container.2xl"}
            h="wrap"
            bg={"#F9F6EE"}
        >
            <Flex 
                justify="center" 
                align="center"
                h={'inherit'}
                direction={'column'}
            >
            
                <Box width={{ base: '80%px', md: '60%px' , lg: "50%"}} px={'20px'} my={'5rem'}>
                    <Flex justify="center" align="center" direction={'column'}>
                        <Text fontSize={'25px'} as="i" color={"#C19A6B"}>#HAtiuntukberSANDar E-Invitation Generator</Text>
                    </Flex>

                    <Flex mt={'2rem'} justify="center" align="center" direction={'column'} gap={3}>
                        <Text fontSize={{ base: "16px", md: "18px" , lg: "20px" }}>Pengirim Undangan </Text>
                        <Select 
                            width='100%'
                            bgColor={'rgba(250, 249, 246, 0.7)'}  
                            focusBorderColor='#483C32'
                            placeholder='Pengirim Undangan'
                            _placeholder={{ color: '#483C32' }}
                            onChange={(e) => setTipeUndangan(e.target.value)}
                        >
                            <option value='AB'>Ayah & Bunda</option>
                            <option value='MM'>Mami</option>
                            <option value='SG'>Sandy & Graha</option>
                        </Select>
                        <Text fontSize={{ base: "16px", md: "18px" , lg: "20px" }}>Nama Tamu Undangan: </Text>
                        <Input 
                            bgColor={'rgba(250, 249, 246, 0.8)'} 
                            focusBorderColor='#483C32'
                            placeholder='Nama Tamu Undangan. Contoh: Graha, Graha Eryck, Graha Eryck Pratama' 
                            _placeholder={{ color: '#483C32' }}
                            onChange={(e) => setTamuUndangan(e.target.value)}
                        />
                        <Text fontSize={{ base: "16px", md: "18px" , lg: "20px" }}>Nama Pasangan Tamu Undangan: </Text>
                        <Text fontSize={{ base: "12px", md: "14px" , lg: "16px" }}>Letakan "0" jika tidak ada Pasangan </Text>
                        <Input 
                            bgColor={'rgba(250, 249, 246, 0.8)'} 
                            focusBorderColor='#483C32'
                            placeholder='Contoh: Graha Eryck, Suami, Istri, Keluarga atau 0' 
                            _placeholder={{ color: '#483C32' }}
                            onChange={(e) => setPasanganTamu(e.target.value)}
                        />

                        <Textarea
                            minH={'400px'}
                            bgColor={'rgba(250, 249, 246, 0.8)'} 
                            value={valueBox}
                            // onChange={handleInputChange}
                            placeholder='Here is a sample placeholder'
                            size='sm'
                        > </Textarea>

                        <Button 
                            bgColor={"#C19A6B"} 
                            variant='solid' 
                            alignItems='center'
                            width='60%' 
                            isDisabled={tamuUndangan && pasanganTamu && tipeUndangan ? (false):(true)}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleBuatUndangan(tamuUndangan, pasanganTamu, tipeUndangan);
                            }}
                        >
                            Buat Undangan
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        </>
    );

}

export default LinkGenerator;