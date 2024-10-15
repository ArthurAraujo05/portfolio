'use client'

import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Portfolio() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className={`mb-8 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Foto 3x4" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold">Arthur Guilherme Araujo Leite</CardTitle>
                <p className="text-sm text-muted-foreground">18 Anos, Hortolândia-SP</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className={`w-10 h-10 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
              >
                {isDarkTheme ? (
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-2 space-y-1">
              <p>Email: arthurguiaraujo123@gmail.com</p>
              <p>Github: ArthurAraujo05</p>
              <p>LinkedIn: Arthur Araujo | LinkedIn</p>
              <p>Telefone: 19 99371-6787</p>
            </div>
          </CardContent>
        </Card>

        <Card className={`mb-8 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Atualmente cursando Ciência da Computação, busco desenvolvimento na área de tecnologia, tenho interesse em crescimento profissional na área de TI. Meu objetivo é contribuir para soluções inovadoras e aprimorar minhas habilidades técnicas.</p>
          </CardContent>
        </Card>

        <Card className={`mb-8 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle>Experiência Profissional</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Projeto Nowe company Trainee</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">Janeiro - Março de 2024</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Produto: We on sistema do tipo GED (Gerenciador Eletrônico de Documentos) que se destaca pela facilidade de customização de tabelas e geração de Dashboards.</li>
                    <li>Habilidades diversas: Refinamento de tarefas, prototipação de interfaces, UI/UX, Metodologia Scrum.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Estágio Construtora e Incorporadora Mottasul</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">Setembro de 2023 - Presente</p>
                  <p className="mb-2">Setores: Frota, TI, Financeiro e Suprimentos (Compras) e Engenharia.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Geração de relatórios</li>
                    <li>Controle de notas fiscais</li>
                    <li>Compras estratégicas</li>
                    <li>Agendamentos de manutenção</li>
                    <li>Ordens de serviço</li>
                    <li>Manutenção de notebooks</li>
                    <li>Automações em Python</li>
                    <li>Excel</li>
                    <li>Help Desk</li>
                    <li>Trello e Sienge</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className={`mb-8 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle>Formação</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Técnico em informática</span>
                <p className="text-sm text-muted-foreground">Bento Quirino (Fev 2020 - Dez 2023)</p>
              </li>
              <li>
                <span className="font-semibold">Ciência da computação</span>
                <p className="text-sm text-muted-foreground">UniMetrocamp (esperado Fev 2024 - 2030)</p>
              </li>
              <li>
                <span className="font-semibold">Inglês</span>
                <p className="text-sm text-muted-foreground">Natics Club (Maio 2023 - atual) Básico</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className={`mb-8 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
          <CardHeader>
            <CardTitle>Cursos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Lógica de programação</span>
                <p className="text-sm text-muted-foreground">Senai (Mai 2021 - Mai 2021)</p>
              </li>
              <li>
                <span className="font-semibold">Curso de Next.js</span>
                <p className="text-sm text-muted-foreground">Udemy (Dez 2023 - Fev 2024)</p>
              </li>
              <li>
                <span className="font-semibold">AWS Certified Cloud Practitioner</span>
                <p className="text-sm text-muted-foreground">Agosto - Setembro 2024</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
            <CardHeader>
              <CardTitle>Habilidades Técnicas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Pacote Office</Badge>
                <Badge variant="secondary">Scrum</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
            <CardHeader>
              <CardTitle>Conhecimentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">API</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Cyber Security</Badge>
                <Badge variant="outline">Redes</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">C</Badge>
                <Badge variant="outline">IA</Badge>
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Big Data</Badge>
                <Badge variant="outline">BI</Badge>
                <Badge variant="outline">Hardware</Badge>
                <Badge variant="outline">Hacking</Badge>
                <Badge variant="outline">Help Desk</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}