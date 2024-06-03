export interface ButtonStyle{

    button:{
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
        
       
       
     
    };
    title:{
        color:string;
        fontWeight:string;
    };
    icon:{
        color:string;
    };
    }
    
    
    export interface ButtonVariant{
    enable:ButtonStyle
    disable:ButtonStyle
    }
    //botao com fundo normal
    export const ButtonPrimary: ButtonVariant = {
    enable:{
    button:{
        backgroundColor:'#1ED760',
        
      
    },
    title:{
        color: '#black',
        fontWeight:'bold'
},
    icon:{color: '#fff'},
    },
    
    disable:{
    button:{
        backgroundColor:'#32012F'
    },
    title:{
        color: '#fff',
        fontWeight:'bold'
    },
    icon:{color: '#fff'},
    },
    };
    
    // botao com fundo transparente
    export const ButtonOutline: ButtonVariant = {
    enable:{
        button:{
            backgroundColor:'transparent',
            borderWidth:1,
            borderColor:'#B4B4B8',
           
            
        },
        title:{
            color: '#fff',
            fontWeight:'bold'
    },
        icon:{color: '#fff'},
    },
    
    disable:{
        button:{
            backgroundColor:'transparent',
            borderWidth:1,
            borderColor:'#B4B4B8',
            
            
        },
        title:{
            
        color: 'red',
        fontWeight:'bold'
    },
        icon:{color: '#fff'},
      },
    };
    
    export const ButtonEntrar: ButtonVariant = {
        enable:{
            button:{
                backgroundColor:'transparent',
                borderWidth:1,
                borderColor:'transparent',
               
                
            },
            title:{
                color: '#fff',
                fontWeight:'bold'
        },
            icon:{color: '#fff'},
        },
        
        disable:{
            button:{
                backgroundColor:'transparent',
                borderWidth:1,
                borderColor:'#B4B4B8',
                
                
            },
            title:{
                
            color: 'red',
            fontWeight:'bold'
        },
            icon:{color: '#fff'},
          },
        };


        export const ButtonHome: ButtonVariant = {
            enable:{
                button:{
                    backgroundColor:'#1DB954',
                    borderWidth:1,
                    borderColor:'black',
                   
                    
                },
                title:{
                    color: 'black',
                    fontWeight:'700'
            },
                icon:{color: '#fff'},
            },
            
            disable:{
                button:{
                    backgroundColor:'#413F42',
                    borderWidth:0,
                    borderColor:'#B4B4B8',
                    
                    
                },
                title:{
                    
                color: 'white',
                fontWeight:'700'
            },
                icon:{color: '#fff'},
              },
            };
    



    export const variants = {
        // aqui você vai puxar as propriedades dos botões, com a variante lá do ButtonProps
        noBorder:ButtonEntrar,
        primary: ButtonPrimary,
        outline: ButtonOutline, // Corrigido de "otuline" para "outline"
        home: ButtonHome,
    };
    