import { Grid, GridItem, Image, Button, Text, Show } from '@chakra-ui/react';
import {  localUrl } from '../../app/config';

export default function findJobTable({data}) {


  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    return formattedDate;
  }
  return (
    <Grid
      templateAreas={{
        base: `"row"
                "row"
                "row"
                "row"
                "row"
    `,
        lg: `"h1 h2 h3 h4 h5"
                            "row row row row row"
`,
      }}
      w={{sm:'80%',lg:'100%'}}
      m={{sm:'auto',lg:'0'}}
      rowGap='2rem'
      border={{base:'1px solid',lg:'0'}}
      borderColor='brand.primary.300'
      p="3rem"
      borderRadius={{base:'2rem',lg:'0'}}
    >
      {/* Column Headings */}
      <Show above='lg'>
        <GridItem colSpan={1} fontWeight='bold' textAlign='start' area='h1'>
          Job Details
        </GridItem>
        <GridItem colSpan={1} fontWeight='bold' textAlign='start' area='h2'>
          Commitment
        </GridItem>
        <GridItem colSpan={1} fontWeight='bold' textAlign='start' area='h3'>
          Location
        </GridItem>
        <GridItem colSpan={1} fontWeight='bold' textAlign='start' area='h4'>
          Posted Date
        </GridItem>
        <GridItem colSpan={1} fontWeight='bold' textAlign='start' area='h5'>
          Actions
        </GridItem>
      </Show>
      {data && data?.map((item:any)=>(
      <>
   
      <GridItem
       display={{base:'column' ,sm:'column',lg:'flex'}}
        gap='1rem'
        colSpan={1}
        rowSpan={1}
        alignItems='center'
        fontWeight='bold'
        textAlign='center'
        area='row'
        borderRadius='8px 0 0 8px'
      
        borderLeft={{base:'0',lg:'1px solid #FF8F5F'}}
        borderTop={{base:'0',lg:'1px solid #FF8F5F'}}
        borderBottom={{base:'0',lg:'1px solid #FF8F5F'}}
        p={{base:'0',lg:'1.5rem'}}
        borderColor='brand.primary.300'
      >
        <Image src={`${localUrl}${item.image}`} alt='' objectFit="contain" borderRadius='5px' w={{base:'100%',lg:'5rem'}} h={{base:'10rem',lg:'3rem'}} />
        <Text variant='description' pt={{base:'1rem',lg:'0'}}>
          {item.title}
        </Text>
      </GridItem>
      <GridItem
       display='flex'
        colSpan={1}
        rowSpan={1}
        alignItems='center'
        fontWeight='bold'
        textAlign={{base:'left',md:'center'}}
        area='row'
        borderTop={{base:'0',lg:'1px solid #FF8F5F'}}
        borderBottom={{base:'0',lg:'1px solid #FF8F5F'}}
        borderRight='0'
        borderLeft='0'
        borderColor='brand.primary.300'
      >
        <Text variant='description' >  {item.commitment}</Text>
      </GridItem>
      <GridItem
        display='flex'
        borderLeft='0'
        colSpan={1}
        rowSpan={1}
        alignItems='center'
        fontWeight='bold'
        textAlign='center'
        area='row'
        borderTop={{base:'0',lg:'1px solid #FF8F5F'}}
        borderBottom={{base:'0',lg:'1px solid #FF8F5F'}}
        borderColor='brand.primary.300'
      >
        <Text variant='description'>{item.location}</Text>
      </GridItem>
      <GridItem
        display='flex'
        borderTop={{base:'0',lg:'1px solid #FF8F5F'}}
        borderBottom={{base:'0',lg:'1px solid #FF8F5F'}}
        borderColor='brand.primary.300'
        colSpan={1}
        rowSpan={1}
        alignItems='center'
        fontWeight='bold'
     
        textAlign='center'
        area='row'
      >
        <Text variant='description'>{formatDate(item.createdAt)}</Text>
      </GridItem>
      <GridItem
        display='flex'
        borderLeft='0'
        rowSpan={1}
        borderRight={{base:'0',lg:'1px solid #FF8F5F'}}
        borderBottom={{base:'0',lg:'1px solid #FF8F5F'}}
        borderTop={{base:'0',lg:'1px solid #FF8F5F'}}
        borderRadius='0 8px 8px 0'
        borderColor='brand.primary.300'
        colSpan={1}
        alignItems='center'
        fontWeight='bold'
        textAlign='center'
        area='row'
      >
        <Button  w={{base:'100%',lg:'50%'}}>View</Button>
      </GridItem>
      </>))}
    </Grid>
  );
}
