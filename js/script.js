

const { createApp } = Vue


createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            indiceDisplay: 0,

            contenitoreVariabile : 0,

            displayNome: "Michele",

            numeroImg: "_1",

            userInput: "",

            nomeDaCercare: "",

            contatoreChats: 0,


            indiceOptionsMex: null,

            indiceOptions: null,

            indiceArichivie: null,

            arrayArchivieChats: [],

            showIndiceArichivieChats: 0,

            contatoreMex: 1,
            
            contatoreArchivieChat: 3,

            contatoreExtractChat: 1,

            contatoreSentMex: 0,

            orario: `${luxon.DateTime.now().toFormat('t')}`,

        }
    },
    methods: {

        changeChat(indice){


            this.contenitoreVariabile = indice;



            this.indiceDisplay = indice;

            this.contatoreMex = 1;

            // this.contatoreArchivieChat = 1;

            this.displayNome = this.contacts[indice].name; 

            this.numeroImg = this.contacts[indice].avatar;
        
        },
        sentMex(mexUtente){

            if(this.contatoreSentMex > 0){

                this.contacts[this.indiceDisplay].messages.splice(this.contacts[this.indiceDisplay].messages.length - 1, 1)
                this.contatoreSentMex--;
                this.contatoreMex = 1;
            }

            this.contacts[this.indiceDisplay].messages.push(
                {
                    date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('t')}`,    
                    message: mexUtente,
                    status: "sent"
                }
            )


            this.clearMexUtente();

            setTimeout(() => {
                this.getMexAnswer();
            }, 1*1000);

        },
        clearMexUtente(){
            this.userInput = "";
        },
        getMexAnswer(){

           
            if (this.contacts[this.indiceDisplay].messages[this.contacts[this.indiceDisplay].messages.length - 1].message == "ciao") {

                this.contacts[this.indiceDisplay].messages.push(

                    {

                        date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('t')}`,
                        message: 'ciao',
                        status: 'received'

                    }

                )


            }else if (this.contacts[this.indiceDisplay].messages[this.contacts[this.indiceDisplay].messages.length - 1].message == "come stai?") {

                this.contacts[this.indiceDisplay].messages.push(

                    {

                        date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('t')}`,
                        message: 'bene tu?',
                        status: 'received'

                    }

                )


            }else if (this.contacts[this.indiceDisplay].messages[this.contacts[this.indiceDisplay].messages.length - 1].message == "bene") {

                this.contacts[this.indiceDisplay].messages.push(

                    {

                        date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('t')}`,
                        message: 'bene',
                        status: 'received'

                    }

                )


            } else if (this.contacts[this.indiceDisplay].messages[this.contacts[this.indiceDisplay].messages.length - 1].message == "che fai?") {

                this.contacts[this.indiceDisplay].messages.push(

                    {

                        date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('t')}`,
                        message: 'niente tu?',
                        status: 'received'

                    }

                )


            } else if (this.contacts[this.indiceDisplay].messages[this.contacts[this.indiceDisplay].messages.length - 1].message == "niente") {

                this.contacts[this.indiceDisplay].messages.push(

                    {

                        date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('t')}`,
                        message: 'capito',
                        status: 'received'

                    }

                )


            } else{
                this.contacts[this.indiceDisplay].messages.push(

                    {

                        date: `${luxon.DateTime.now().toFormat('D')} ${luxon.DateTime.now().toFormat('t')}`,
                        message: 'non sai tenere una conversazione',
                        status: 'received'

                    }

                )
            }

           

        },
        serchFromContacsList(nome){

            this.contatoreChats = 0;

            this.contacts.forEach(contact => {
                contact.visible = true;
            });

            const arraySerchName = this.contacts.filter((contact) => 

                contact.name.includes(nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase())

            );
                

            const differenza = this.contacts.filter(contact => !arraySerchName.includes(contact));


            differenza.forEach(elemento => {
                elemento.visible = false;
                this.contatoreChats++;
            });


        },
        giveActiveChats(indice){

            

            if(this.contenitoreVariabile == indice){

                return true;
            
            }




        },
        showOptionsMex(indice){


            this.indiceOptionsMex = indice



        },
        hiddenOptionsMex(){

            
            this.indiceOptionsMex = null;
            this.indiceOptions = null;
        
        
        },
        showHiddenOptions(indice){



            this.indiceOptions = indice;


        },
        deleteMex(indice){

            if (this.contacts[this.indiceDisplay].messages.length != 0){


                if(this.contatoreMex > 0){

                    this.contacts[this.indiceDisplay].messages.push({
                        date: '',
                        message: '',
                        status: ''
                    });
                    
                    this.contatoreMex--;
                    this.contatoreSentMex = 1;
                }
                
                this.contacts[this.indiceDisplay].messages.splice(indice, 1);
                
                

            }



        },
        showArichivie(indice){

            this.indiceArichivie = indice;

        },
        hiddenArichivie(){

            this.indiceArichivie = null;

        },
        archivieChat(indice){

            if(this.contatoreArchivieChat == 0){

                this.contacts.splice(this.contacts.length - 1,1)

                this.contatoreArchivieChat = 1;
            }

           

            if (this.contatoreArchivieChat > 0) {

                if(indice == 0){
                    this.contacts.push({
                        name: this.contacts[indice].name,
                        avatar: this.contacts[indice].avatar,
                        visible: true,
                        messages: [
                            {
                                date: '',
                                message: '',
                                status: 'non comparire'
                            },
                            {
                                date: '',
                                message: '',
                                status: ''
                            },
                            {
                                date: '',
                                message: '',
                                status: ''
                            }
                        ],
                    });
                    
                    this.contatoreArchivieChat = 0;
                    this.contatoreExtractChat = 1;
                    
                }else{
                    this.contacts.push({
                        name: this.contacts[indice - 1].name,
                        avatar: this.contacts[indice - 1].avatar,
                        visible: true,
                        messages: [
                            {
                                date: '',
                                message: '',
                                status: 'non comparire'
                            },
                            {
                                date: '',
                                message: '',
                                status: ''
                            },
                            {
                                date: '',
                                message: '',
                                status: ''
                            }
                        ],
                    });
                    this.contatoreArchivieChat = 0;
                    this.contatoreExtractChat = 1;
                }
            }
           
            this.arrayArchivieChats.push(this.contacts[indice]);
           
            this.contacts.splice(indice, 1);
            



        },
        showArichivieChats(){

            this.showIndiceArichivieChats = 1;


        },
        hiddenArchivieChats(){
            this.showIndiceArichivieChats = 0;
        
        },
        extracktChat(indice){


            if(this.contatoreExtractChat > 0){
                
                this.contacts.splice(this.contacts.length - 1, 1);
                this.contatoreArchivieChat = 1;
                this.contatoreExtractChat--;
                

            }


            this.contacts.push(this.arrayArchivieChats[indice]);

            this.arrayArchivieChats.splice(indice, 1);



            this.displayNome = this.contacts[this.contacts.length - 1].name; 
            
            this.numeroImg = this.contacts[this.contacts.length - 1].avatar;


        },
        scrollIntoLastItem(){


            const elementoDaScorrere = document.querySelectorAll("div.mex")


            elementoDaScorrere[elementoDaScorrere.length - 1].scrollIntoView({
                behavior: "smooth"
            })

        
            
        },
        
    },
    updated(){
        
        this.scrollIntoLastItem();
        
       
        
    }
}).mount("#app")
