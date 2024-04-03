import { Container, Links, Content } from './styles'

import {  Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import {  ButtonText } from '../../components/ButtonText'

export function Details() {
  return(
    <Container>
      <Header/>

      <main>
        <Content>

      
      <ButtonText title="Excluir nota"/>

      <h1>
        Introdução ao React
      </h1>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Porro suscipit nobis animi dolorem omnis quia mollitia nihil dolor sequi esse, 
        corporis eum vitae ratione adipisci cum minus, nesciunt illo quaerat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus velit ut iure aliquid molestias tenetur, expedita soluta impedit necessitatibus, incidunt eos perferendis molestiae sapiente quas nemo beatae! Omnis, ducimus est!
      </p>
      
      <Section title="Links úteis">
        <Links>
          
            <li><a href="#">https://www.rocketseat.com.br</a></li>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
          
         
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"></Tag>
        <Tag title="node"></Tag>

      </Section>


      <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  )
}