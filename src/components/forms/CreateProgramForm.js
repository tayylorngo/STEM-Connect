import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import axios from "axios";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

let name = "";
let title = "";
let price = "";
let imgURL = "";
let email = "";
let phone = "";
let description = "";

const submitProgram = (e) => {
  e.preventDefault();
  const program = {
      title: title,
      company: name,
      price: price,
      URL: imgURL,
      email: email,
      phone: phone,
      description: description
  }
  console.log(program);
  axios.post("http://localhost:5000/", program
  ).then(response => {
    console.log(response)
  }).catch(error => {
    console.log(error);
  });
  window.location.href = "/programs";
}

const changeName = (e) => {
  name = e.target.value;
}

const changeTitle = (e) => {
  title = e.target.value;
}

const changePrice = (e) => {
  price = e.target.value;
}

const changeimgURL = (e) => {
  imgURL = e.target.value;
}

const changeEmail = (e) => {
  email = e.target.value;
}

const changePhone = (e) => {
  phone = e.target.value;
}

const changeDescription = (e) => {
  description = e.target.value;
}


export default ({
  subheading = "Create a Program",
  heading = <>Create & <span tw="text-primary-500">Educate</span><wbr/> with us.</>,
  description = "",
  submitButtonText = "Create Program",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc="https://images.unsplash.com/photo-1599249300675-c39f1dd2d6be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}>
              <Input type="text" name="name" placeholder="Title" onChange={changeName} />
              <Input type="text" name="subject" placeholder="Company Name" onChange={changeTitle} />
              <Input type="text" name="subject" placeholder="Price (USD)" onChange={changePrice}/>
              <Input type="text" name="subject" placeholder="Cover Image URL" onChange={changeimgURL} />
              <Input type="email" name="subject" placeholder="Email Address" onChange={changeEmail} />
              <Input type="tel" name="subject" placeholder="Phone Number" onChange={changePhone} />
              <Textarea name="message" placeholder="Description" onChange={changeDescription}/>
              <SubmitButton onClick={submitProgram} type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
