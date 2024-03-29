/* eslint-disable no-unused-vars */
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


function ClientesPDF({ infcauts, idClicked, name, rg, unidade, modelo, imei1, imei2, numero, data, data_des, marca,funcao, fiscal, postgrad, manual, carregador}) {



  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  

  /////////// DEVOLUÇÕES

  const dados = 
    
      [
       
          {text :  modelo, fontSize :10 ,margin : [0, 2,0 ,2]},
          {text :   imei1, fontSize :10 ,margin : [0, 2,0 ,2]},
          {text :  numero, fontSize :10 ,margin : [0, 2,0 ,2]},
          {text :  marca, fontSize :10 ,margin : [0, 2,0 ,2]},
          {text :  data_des, fontSize :10 ,margin : [0, 2,0 ,2]}
      ];

  



  // ISSO É
  const details = [
    {
      canvas: [
        {
          type: 'line',
          x1: 10,
          y1: -15,  // Posição vertical inicial
          x2: 500,
          y2: -15,  // Posição vertical final
          lineWidth: 1,
        }
      ],
      },

    {
      text : ["TERMO DE DEVOLUÇÃO DE USUÁRIO DE TELEFONIA MÓVEL", ],fontSize: 14,decoration: 'underline', alignment: "center",
      margin: [25, 10, 0, 20],
      bold: true,
    },
    {
      ul: ["  ÓRGÃO: POLÍCIA MILITAR DO ESTADO DO PARÁ"],
      margin: [60, 2, 0, 2],
    },
    {
      ul: [
          
        { text: [`UNIDADE: `,
        { text: unidade, bold: true },
      ]}
      ],
      margin: [60, 2, 0, 2],
  },
    // {
    //     text : `${Modem.nome}`
    // },
    {
      ul: [{ text: [`FUNÇÃO: `,
      { text: funcao, bold: true },
    ]}],
      margin: [60, 2, 0, 25],
    },

    {
      text: [
        'Eu, ',
       {text: `${postgrad} ${name} ,RG  ${rg},`, bold:true},
        'declaro ter devolvido o material abaixo descrito:',
      ],
      margin: [53, 2, 0, 25],
    },

    {
      style: 'tableExample',
      table: {
        headerRows: 1,
        widths: [ 35, 85, 95, 118, 35], 
        
        // cabeçalho da tabela fixa
        body: [
          [
            {
              text: "Nº",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },

            {
              text: "DESCRIÇÃO",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
     
           
            {
              text: "MODELO",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: "Nº DE SÉRIE",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: "QTD",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
              
              
            },
            

          
     
          ],

          [
            {
              text: "1",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },

            {
              text: `Celular ${marca}`,
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
     
           
            {
              text: modelo,
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: imei1,
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: "1",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
              
              
            },
            

          
     
          ],

          [
            {
              text: "2",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },

            {
              text: "Carregador",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
     
           
            {
              text: "xxxx",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: "xxxx",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: carregador,
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
              
              
            },
            

          
     
          ],

          [
            {
              text: "3",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },

            {
              text: "Kit de Manuais",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
     
           
            {
              text: "xxxx",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: "xxxx",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: manual,
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
              
              
            },
            

          
     
          ],

          [
            {
              text: "4",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },

            {
              text: "Chip",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
     
           
            {
              text: numero,
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: 'nserie',
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
            },
            {
              text: "1",
              style: "tableHeader",
              fontSize: 10,
              margin: [0, 0, 0, 0],
              bold: true,
              
              
            },
            

          
     
          ],

          

          
            

          
     
          
         
        ],
      },
      
      margin: [40, 2, 10,20], //esquerda ,cima ,direita ,baixo
      alignment: "center",
    },
    /// texto estático
    //INDENTAÇÃO CRIADA POR ERICK 29/09/2023

    // DEVOLUÇÕES


    // TABELA DE RECEBIMENTO
    {
      style: "tableExample",
      table: {
        headerRows: 1,
        widths: [250, 250],

        body: [
          [{text: 'RECEBIMENTO', style: 'tableHeader',colSpan:2,alignment: 'center' ,bold :true}, {text: '', style: 'tableHeader'}],
          [
            {
              text: [
                { text: 'FISCAL DO CONTRATO:', bold: true, decoration: 'underline' },
                { text: `\n\nDATA: ${data} \n\nNOME:`},
                { text: fiscal, bold: true},
                
                `\n\nASSINATURA: ____________________________\n`
            ]
             } ,

             {
              text: [
                { text: 'USUÁRIO:', bold: true, decoration: 'underline',  },
                
               {text: ` \n Declaro pelo presente documento, que estou devolvendo os bens acima relacionados. \n\nDATA: ${data} \n\nNOME: ` }, 
                  {text: `${postgrad} ${name}`,bold: true},
                {text: '\n\n ASSINATURA: ____________________________ '}
            ] 
             },
              
          ]
      ]
      },
    },
  ];

  function Rodape(currentPage, pageCounf) {
    return [
      {
        text: currentPage + " /" + pageCounf,
        alignment: "right",
        fontSize: 9,

        margin: [0, 10, 20, 0],
      },
    ];
  }

  const docDefinitios = {
    pageSize: "A4",
    pageMargins: [40, 100, 40, 60],

    content: [details],
    footer: Rodape,
  };

  const pdfFooter = {
    columns: [
      {
        stack: [
          {
            canvas: [
              {
                type: 'line',
                x1: 40,
                y1: 5,
                x2: 570,
                y2: 5,
                lineWidth: 1
              }
            ]
          },
          { text: 'Rod. Augusto Montenegro, KM 09, nº 8401 – Bairro do Parque Guajará – CEP 66.821.000 – Distrito de Icoaraci – Belém – PA.', fontSize: 8 },
          { text: 'E-mail: Fiscaltelefonia.pmpa@gmail.com', fontSize: 8 },
          
        ],
        width: '94%',
        alignment: 'center', // Centraliza o conteúdo dentro da coluna
      }
    ],
    columnGap: 10,
    margin: [40, 10, 40, 0],
  };
  const pageDefinition = {
    pageSize: "A4",
    pageMargins: [40, 100, 40, 60],

    header: function () {
      return {
        columns: [
          {
            image:
              "data:image/png;base64,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",
            width: 50,
            margin: [20, 20, 0, 0],
          },
          {
            text: [
              `GOVERNO DO ESTADO DO PARÁ\n SECRETÁRIA DE ESTADO DE SEGURANÇA PÚBLICA E DEFESA SOCIAL\n POLÍCIA MILITAR DO ESTADO PARÁ \nDIRETORIA DE TELEMÁTICA `,
            ],
            bold: true,
            alignment: "center",
            fontSize: 10,
            margin: [0, 20, 0, 0],
          },
          {
            image:
              "data:image/png;base64,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",
            width: 40,
            margin: [-20, 20, 20, 0],
          },
        ],
      };
    },

    background: function (currentPage, pageSize) {
      return {
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeQAAAKKCAMAAADbZth8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAQlBMVEUAAADXAAAATqz///8AAIAAWcYAAP8AAADy8vIAWQAAkwAAgACAQADntAPAwMCykQZubm7/gED944yAAAD0AAD81E4UQjOjAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAADOjSURBVHja7d2LdqQ4DgDQmSKzFOlMZ6rT+f9f3S6efkiyZMuPAvuc3ekkBdi6JQMGzF9/9dJLL7300ksvvfTSSy+99CItf/dyttKRL1A68gVKR75A6cgXKB35AqUjX6B05AuUjnyBQiDfennt0pEvUDryBUpHvkDpyBcoHfkCpSNfoHTkC5SOfIEiQq46WtOLtHTkC5SOfIHSkS9QOvIFSke+QOnIFygd+QKlI1+gpCIPvTRbOvIFSke+QOnIFygd+QKlI1+gdOQLlI58gdKRL1A68gVKR75A6cgXKB35AqUjX6B05AuUjnyB0pGZZW1w7WpElY7MLDeo1K4Us3RkZrmRpXbt6NKRmeUWLLVriJeOzCxh5HaZz4+sFHoOcqvKZ0ZWjTwLuVHmkyKrB55p3JELFvXIc5GbVO7IMSt8MeVzIusH3lpbIWS1lXVk+RrJTekp663vGsjpgSJXlgVZcZUXQU6OPL2uDMiaa+zI8jXK/5y0vfSVnRL5dlNXDq0pX3etsKrLICcGS4Csd3ytta6OLF5lcJMqTdCMx3WQ08JWGFm3Rzgj8q08cg5jPecLISdFrBKyzvpOjqwVrtBadFEUe6C5dGTpKkOnybqjayorPDfyoBV/qvvXJlHdzczlhMhOePIhw0Wx+udGTmodgRwdr3LGF0FObaC7tEbAaiby+ZAVWlgVWb3950NWiZu3qELEahqfClkpcv6CxZAzhSB5tc0gqwUPWC49ZEWIs4zHPksbyJrxgxZLjlkB4eHcyLpJkhsZqnIyAxmH5BVXRw4LC9sJLpUaNGBpdWV7hSdC5hFL2gkvlAFZW9lt8EmQucKihiLLJIpk6R6IYOANiSlNIgN/TONIvXqHLKupTAUgcdUNIieG0FsmqV8AqoI2IMnBX9NJkENj8TEhvPFKQkXxrSUwACs6KTI7tvxVZkbOcU8C0APFr3gpdY+uAyHKhxw/VEo97haLAK6lIzPjpaWML6iPDPwydr1baQc5oByzxtLIGlc/EtqOlrrIgocFI+Klp0wslq6MrOGcyBoHXgLk5KFSVhOkVeZtU1gqI/Mf7o6JWHlkuQe6+EWQI6IXEI0FIRdSRGZvU1ZaQr4J/sZZHbBgduSUM/DTZrLuKWh4mTgQepkEZOJLeVZk7ApPFDInqhGVVFsn1EpzFQndg1uqI4ONQb/eSRj+qhOqmLpOsJnmWk6OjHy1ZeviBTa2itRK45pOlujgLqUt5BvS8Ih1cbcnraLWOgfJ+V50cJdSH1nxPj7WMtHhoxaIWSff+ArIUWtibg/6wNvbG7Ycrw06zT4V8qDWQOZSoU8gyPw2pDf6YsiRK0qozttbjHJamwNhSNxY48jR60mozts/b/8rjByKROLGWkDWatsLIePtvBZy2mriK/M2I+dVplt6TmSlZikh//MHOW8qh9t6AeTktaTUpTgy40OJ22sQOWklieGYe+sZuVh/nfQZXmkDWXvawoTyx/iJXOz4ukRMGkSuqvy2I2dXnlvNjEnadhpBbiaVn8Yzcv5ULheSjmyXjlwIuaLym4FcW/l8yI2k8my8IFdP5ZMj11PuyHknayuP/AYUExkoZSqmHZBrI//PK8Y++R+vdGTNNpVRnnOTjVw8k/WGvNpBrpLKTztf+c03fss/1EkFJG1FjSIXVP7HTmcIeflE8XOqMyLXOItaD7VM5/UChSP8v9J9tR2StLVcHHkb/jCd55sG/nF+W29o5MTI5ZWPnN2QjfyuPPx1IuRKo15vb/bx1f/e1l21saOuPTCSVppFrqT8zz7u8b/TGLeFXGsA21L+xzt9fnXjdpGLRuHtzTzSev5kHIe9vHGjyOXjYJ4xW+dVr0/cGrLSzXgx5eijjVOo4iOZeUpzyNUi8QYOhpzBuDXkeuXIY2tYs2fyqZCRseuOfD5k71JjRz4dsnVnSEc+GfIbinwC5Y68FNP1H7PrPkMqd+SlWHf8mAdhHflcyN5F5OVQu3bV0ktHnsubfWpsnTS/vnJHnsubcaD1RH0zDsQ68nmQnYPpQ7kjnwvZvB7xtnXhHfkcyG9v0O53VX79nXJHfpY/knYar7+eb6l//VTuyM+yPEoB/uEMtw105GfBn3Mq/wRUhtKRn8WBHIm/vWLpyEAZxzF9JQ2VjgyUjnx+5HEY76dS7sh+6cgd+fVKR/bKH9/xfirljuyVjtyRX7B0ZLc8df8gn0m5IeRpKbUj0gyyXjxaQX425/1ZqjM3gmzEIzkgbSBvLVqbVTO4s+0Tua6yHZDEiDSBbLbo2aia0W0F2Y5IWkgaQJ4c47qp3AayH5KUmNRHdttTOZUbQfZjkhCUBpDfVRuUWBbZGbmi8gQFJX511ZGh9lRM5UaQ31W/+fWR3zty7qDURp5aRq6mDAclOirVkd+bQl5ZF+R6qawclcrIE9KcWsptIGtHpTby+7vulzaxNIKsHJW6yJOkOZNRcoW3EHKgKWhUIttdGfmdh7yE48desimXQbab4ktzw8ItVZHtRLbG5O2PGUHJqryp5kWGmmM3GA5KdCrXRcaMTWSA+BmWLOEvhAy1x/Sb3lHlqA22jgwTnw/ZYj4T8hRGRojPiGzsgwjkqHZXRX4PfmOxeORD/vCK+laCjWIERlQqIlOJPG0fCX3pdcvT9F+nOM4K6sFWTcqpXBP5HUcORCNLIkPCu/PxmX8VlH+ElFHkqFRuBRnqlHBjfWRc2Ezn5TPJykS7Jl5oXgV5CrRkIoy1kWnhw/lj+2cu5PUYmwpNRNMrIr+TyBSxMjKHeLHd/5UNeUlmAjkmlVtFpo1VkZnET1srq+OlA22bTors3534oxQy3/hfu7uOZw41zgvGqyKTu+SQsR4yt6veM9jsrWOZg62bdHfK9ZDxL2uQWA9ZRAx01HHKjPapnkS1gex8V4Mx0EIWG2+HXfdh+V+cMqeBmv31pZHjjP8g32fk+/M/McpXQSbHNBm9mQ5ylLFzAhWhzGqh4k65GjKxSy5mnIT88+e2GvmWOcqKO+UmkIW9dWXjLZNn5dgOO9xIxf66DjJ9jlDGOLazXpDvq/J9yKRMn2G2j/w8DY5HVjNOQZ6PvJ7K8QdfoWZSARIyV0Cem8dChgKhdiU52ng7un4qD2suR2wfbhwPWRiG8shLQ+KRlYzTkLeVrAdfWmfLfGSRcnHktR3UGUKZRE5BXsp9R86QytQ5pjQSpZG3Vkz093RpxZTPOCGRN+S5z/4Z318PYPuO5geQBbEojLy3IYw8Ze2s05HXY6/lH2pj2BMYIXggga1cGvmHADljZ520S56vUKzHXj9Xbq1U/iFAZn/lyyJPfOTcxkm75PUSxWDslNWVOcjMeBRG/sFFhnfIreySd9J9bDPy0IvYLTOQualcFBk+Q4AOrsFn3CaV55aX3jZxl7wp/zxWG4MM3h8xbSHAlM1zzAaRzZZQiQw2ff6rAvKyV01DHg7kdecciQxddJvooQTrwdfmkK3mIMjbtxg2VkDebp1OPE3+OC5FzSOb8cigspfKJrL4KKUo8g8GMmmsgbxRJV6E+lgOvlIuRW2X4lDlMDIvlRtDXsa1vVbvH9HIZIM59u6feUX7aMjyUzzyO9DeyUnlUyEHjJORPz4+Ddso5g/rAuPPdbVRyCHlUyI/m0YYayTy5+fnRxrzdhFq3yvfh9ib7ad3Uhk+Om0aeWIgAztk4wYDhdPkGdmyhXvt9dlkBHlZ1cd+jWJ9Gk7MbDbNazYVJNmRV0lkLD2t77PfWKPPSjbekG1b33P9EUHe1vWxI6+/EFfHPRxxlLEgCVO5GvIPqP5+Z6393oID+fPTkjWhjccXKeQF9Xl8vd4QFHPfJqq8dNhgkF4ZeZpIY5Vp+kxkh3nvo41fIsj3o8OeUzkaefDHCCxlIzbnQP7zX9o4A3LoPApD3tZmIA9xyLSyGZyXRHa/pJ7xlMHYRQb3yCHk+478ZP35pyyDInEXKaw2egFwkaeXQnZTef7aommsNKeqQWv9C4Om98nG6OZ8upw0IgIZ7qmMJnLzyHYqh4zVkGfND5/b3yOTyNsoyIfxQxRySJlM5NaRf1jI9hSpk3P7vdbkyO5xl5/T6z85yOuYyJrNsbeHuNOlenGYLOQfjSNjqbwj2w3LkMgDuEvGkalTqHmo67nKlfkeObY5QI21gmEdnHoxbAvZvpxsKG/IGLCeMYj8aXfhFvK/CPL9bl2aSJu7D2nxHpED2b8Q29qwpo/840Depvh+B4ve3dYY8pHIBjI2rJl+/Ymh/G4GZUP+8YrIx3E1Cqy3Qx6WUygaOTQUcpxC/Yx+2s2PDNH0aTKOsV8R+YeB/E41VAt5IJC90a4PFHlYkaMPttzI0K3fkX+8JvJ+YA2M0mYwdpDtYlPiAyTrqn4mHFGHla0LVNuO+bWQLWW7r/baqzoj7od1SvwvVsi/zSu6qyIPQKudHhs0fg3k7UUbUxnjIaS7CtOTqe7IgxoypTzZL1ppHHmCkAcaWXlm6zBv+F6RLMjAK5Nt5AFCbu9uTWinvD4XAVxSy2LsPR5D7ZYp5Ls6Mq48TdazFm3fd00hG0eS9oGlrrF1Sy6fFUAe1hNlxdcX+I23Uvn1kO2d8gAn8vOquTpygq7ZXQ9JVyWQ8CCPxljI8l1yY8j+Y1HZXtiXgmxcorirIiPKp0K2+qv1ptRsyOmprL9Tdm6U2H44GbKdxhkTWSOVf+5342op7+NDdiqfCRm4dTEnskIq/1yQtV4fZQ7om8qvhQyPea3I9rCXpBHFlc3Hk7cXzagh2w9OTA6yE8PWkJ3n6gFk3zjry7Ljp+T7sM+i9v9LRYaUaeTGbhqYh18RZPPmU/OexbwvRI+eJfdje0Rmn2lA6SDb2IUZypM5quk+5M1RLohsZKiFPEzrkI5LnBs5duJ6Yz6JTMgG8zogOA0A8prm7SBbV0TN6u7IHnF25Cjlj+Mh9OWea8WBL6cr3kf9DmR/tgZGKpdDtna2ALJ7w2b2XfJiI3/TyLGouR6V6nj31i9hQZDZU2yUQt57Hxh58oBLJPKwjXJGGO+yavcAzWHyQrAVCJl7DacYsnPc7CH/AEp+5H2aGKazrbkdZOsNiMBhgJH5c2yURvaVpwE1liOPf4oI+dDjSLua1Hu0pVVZwoQqb8NhvnGDyO8gspPdEYk8x3Qc73dJaP37ugI3BUnqM1dFSg0OCv4Akd9bQwbnGvORE467xv/+G5+BfYaWHVb4vmrsxj6B8VGVP9WSGDsBwJGtiDaC7FxB5CCL7hiYo3nfYss1Jvtn76YRgfJGfJ+/exLkiYcsejq/AvI7F1lwT/3T+L9xDuyd32PLJ/5hKo9HVf4TKU/vXOT31pEtUwPZ+Rrzb/BajLf04fbXEbM7sZHHvcOWKLvPaBtDv8P0A0vkJpGtO4gnFJk3ZLcE9b99jzzHlYksFWbvlsf/jsrMdeMiv6Pj+4M5NZLw+fzyB17m1eLl/h4QmTsuO8d06azXwLJ3g8I3J1uvTg7WZ63LKOqw0fH9Z592IEufzy9/CmUOUS+XyibD3D545PXXe2c9Lv/HjKrgNffm7E/Z6rOP70MPBk7HpVr58/kVkLemTNsBNIAsmhX32CFvmTN33kFksTArlZcO2uxZ2B22/6S5iTxsITuC2Dryej1iQJC59V/Cuu8C71uIw8nDSWRgbCSUysb2jzpxMxkZL/pxBMqf8qklZGzqYxBZOPXx+N8WT4HyB8M3NPkPy/h5lMDbJ/sD/E4mv0NBbOcCxUBUcN/XeMZc5NFC3gJNdtnb7JlowfXJiuybtuskQvZHBV1k2YyjjSBjJ4FcZCOen5+fnGROf4sfVI99u3MtjFrJkN2hhBdERlIZOglk7pPvRzjnaT+MjEKRE27jCxiP41qLu1AZmE11Q8aNm0IO9degMQfZNF6RD2ZKOfFN6IjxRmwh85QnRJlO5IaQkVT2kO37NhmRGcxY3vcIfx4xH5B9IsT8MAs3lddtHD31WgGrYpym2PdoosjSuYMLIuOpfCDb9+ZGIN+NRDqYsUQymDfYX0dBrR3kef1eGo9OvUTIx5TBO3J8Ihe9uZ5EPk70xcijxzyaybxeEqKYHV27+M4f/ua3Te3CXp3EyPuAEY3MWG1JZFD5QD7uQZUhO3tls9MeR/NSAbzwBykMOpv9tXlZ5NisVx9eQzzH5fY3B1l81FIQGU/lCZ6jXXAVyovqp99rgpFmCAPOH8CWR2NvHGkMRmhFTkjkWsh2KqPzeLHvGnCVwcMfP9Rc4d3ZS+WR3qTMeED6OhtZ/sqGosh4G1KR/R0zAxkkNg6uCWYaOWZ3HECeEnrrwo+uQqmsg+wm82gUOKE8xZV2pwOp//zCunfAvDLiblCYxkzkiHevlEUG9zkD2gbZjdfejvkIvx9uV2/h3T6xHUwNwE57/R7YGx3xjUuaAAfIns4uIkBFkcFUppAlAcKVt7v7jo6T6qh3ZKrT3rc4HvfspRtjR17o3Dktvgkd/KZO1nXSFGRKeTRv0KAOt8h98vGhdXveBac0Yxx5gJC5PV1p5Ckn8kD0mttoxUgbsw+09+uKI7VRaQNEyOwb0wvvk4EXia7I8YcVDjMS78/dxDBe/slA9z74eOzEn+g25dVHD00Hf4KkOZrNITtvfg4iRz2eDEZ8Ob2ZWYxueO2SQ53z8feHvfA+jolsM6L26JGXj7xGszlk97aPKYAcXOPX1xdH2RjltJSGJT/nxaCcfnh/HyxmfBwTNIZq68WIRnaMW5wK2b2Ba0M+9tXCRP76DYRtxIe/Pk2idee8HERt/bFTftkf2BdaV/GJD3KNzNq6MYLveBxcZNEcWBWQnff34chh4z9hg+K23vO8XzugjO1E3lawLgh+AlY2DuORrhqrrRMkCtl/m1+7yBMDmTNF1dfv33ByrFcbRyeR7a52cPP018MbDPE/MthdvpPK43qdUVRbK0bA2B+ALJsEqwayrQwjc2ZP/aLC9qQd7US2j5r8NMWQ7VQe7WM3O5WfG8UOuObaBpSt1597yL5xw8jG9EU2sjOXVwj5NxW257mNlcjeXR9GD70BesjmF+FhLugqrw8xEsZLdRkhcr/yLrJ4prPip1A28zRByLxZF5eo4WHbHh6FjJ88vzw/YOza+yb88q5YmKlMjH+stSWVnZsZHWTj+aIjjK0h23PbHJMXucjMzmiJGpEbTiIfOWwSHXwPENlLZXctTirHV3fwdmg2MjQRVnuDIfAsVcNwHG640/axkNGwLdcOnET+k3kPa+TqOFWCr0I5n9qWMld4pDKRyCLkH2Y4jCB5AWwZ2XhCwED2Ht2k2rBFjUrlpTjG80/+AJdxEWpFxobCHttKzFWOgSkO9tpSyu5jnfsL8JYgucFrE3liIHN3OVvUgkesT2Uv7bBRTG8oBPqM3zl8hgYxv47qcuKzv+CQRm5w7BpP5X0WSduY+qYeUQuefBpntrYP+y4+94jc280HB6qN2uLVdY5ZtoBs++TYRG4Keb+hnIX8m408jIeGyfPnp/HBhJ4/N25fDveA/RG8GMGqrtP2PSQvhkwpzy1y/oq24suMWkjZ66w/D6stzfHOeTuHHu0F7Q47ZMyqrjt1yo6MGTeJTKfycfgYHrUzghZOZd/4cfy4pjm0GzZ/9xi9JU3lEDKrut5X3DrLjE7k4siI8jTBb0zBmvElQd6YjssJdqe7/HW+xcO5CDXf/fH45X3aWNODlcp2dbH6+s1f45KWyKWR7aFNNvKXV37bUfOLifzLzEU3Hbfu2HzO1ZqEyz7aclJ5BFIZqk6gvmxk8ZBmFWQ4lZfGDCjyb2kxkPdkswe/nEQezQkoRsP4v5FI5f3A3Uzl6NoCzd9jk5DIxZHhd94HkaVxMzP5yLXtTg4Q2ZwaajyInzeFYcjLbYFeKkfXNowsf+NqHWQwlbc7ErF9sjBulrGZaschsttbW3MTbHOsLTfqQf31YuytP622UPPtAeuoRC6PDKdyCHn4kgQO3CMvP+3DX04ir4m5z9xjzRvgp7I5yAXulSWV/XJDgyLHJXINZPDYa4L3PEZL2IFzjrqcRBvX7hdANucmsOYNgPpr83EM/wCb/500KwsceA22cVQiV0AG34duJzJ8CsWMm3OCsp8j7w+34MjmRCPm9B8g8ib8gM+VY2oLDE4PA9xZi97dUAMZ6bCRRgrTwz0Jta8Bz9IEspnMxr1hAPLqa67e3jCvslZtwS850lk3jox12EFkTuA8Y3e0cr9P3hnF/vz0ktkZ8bBGrIEh74dY2a0shpzWWddBtjvsSYAcDJw3mERcUgRHsOxkhkbIiEuQqZUlkafYzroWMjij88RADgTOHzAMPP0CIQPJvH0o8DxNamUh5OlAjuysKyEjyuDRpR+4LzxqvvFx9QGDBpCNkymrT6dXAgxgyyoLnl0oGFdCBnbLEzHg5UaOmxnmOSyZhOZFiT2ZGfeI/DIP5cBrUZLKIkNekxGlKONayPZb3SYEeZIgg2GzU4xzhwDrIXQTeFkxhiyqrT96uSHb4RLGuhqyfcPXdLwwxUIGF8RyAzL2g78dXP+KL9vhNfpliq2ud9vA9qody1gc6YrIjrJ5eB2HDIQN7EaPZ5KjgLdzsPCGltomIe+zFaYY10S23uw2GYfXUb01GDYwwXYiKfTePwPIaH+N1hZUdvqyybs+EfW24WrI2/XwyVB2kcEF8eNVFNn/5cP6BLYfdh9UBtdAbEla3cFNZWvoeo/YyyCvN5sa7ybwkKdyyMbYllU+7dGQEsgTgLwJD+uNyy+CDD/l4yDDxsSZZzoyVqKRRdWdIwN2184TYy+CbDxrvrtvHdP2/zDyb7REII/bdUMW8gisIYQsqe4SBjMEkxUf/hwMbSEb38s9lcmHk+37HumoPQLIx7XlkLJ9DRlHfpDV/c25x9QKgWksmWijNeQ9mW3kKdxbu7dB+shg5Hei+S6RtbsOKB8fw5CRVLbqZ9cX668nAHmarIi9BLLzGgLjJXXHaxfgJd0gkVGDA78SLQPT+z55JJnNj4HIyLa+yPpiwTleyLE/62bPpfMSY9fbc7ee8v7+WPSueiMt1jDiT75Zz0ZYp0PuJE7B8stdCPyEj/ybqC+CvL8Oe09ka7qciFSuiOy9bGId2SQTGXjMF49a+hya0oIiQ/XFnqTYXy+yI7uzPr0QMvB6qPW8eQoksn2dbk+OZpGZ9TWU9/PiAXrFyGshuy+V2QZrsQWR2VW+4N9XR/4K1BeNz/FabKCzfi3kd+fc7xgbwYy/fsOX27/ACZTqI/8m64s/+TZNRjw84xdB9pX33okanSUiA83c1gSyoL6usp3IdqzaR0a+nesQPL7YF5gWW9S+YOSKR9fC+trMmzTc670Ssr2fCSKTkwp8wftkI/DjNv4BTDlg3uGFnyfvPz3Wc2Z0WxH19ZEH6PjlZZB95f1ShbAFRHFHvIzH3ShkYGAERDbn/CFuAIos+2UJ3/hFkO3B62MYRxnZirz5ZFMgkz1lBPlIZt6EA1LkYR8cTHo1RzVkQFkd2exD7ZuoKeTny5DvjjKGvDOrJ/JgJLJj/DLI1iWKpRVZkc2HXkjkcX8+eWQhr312RmSbOOb1K/WQJ+dKlHlqqI1siVHI9J0hMPL8vciCPGxXbexIvQ6y/Tao92O6qgxHXnbfCyAz7/FCkOepQ3Icdw32TPbvscelFZF3aPMWF91U9uZ2soii7tYEkT+zHFzDAXo9ZLtV6qm83Q7tI6ffd+0fmGkiq0ajHeQhw155SzAr59SeoPCQFc+gVL/xDSGbA7ZKZbT7a076Yvtnovc+euuYl7qhsdDr1VpCHlL3PW4Zx6O/JtnMI+p5QWNO8/CCR28d9eq+/JFoCnnQRd6n4Ao/n7zNxLctebyeYNi/K6GVLJOB6VRdNxBtIas27rhRL5iEWz8LIx/zBdG9+OMzPIN9+TAMzSFv7VNYkTnPGkhsnihvy2z/tZGt5yxwZueaRQtBWEpzyFoNHEfzkMjrXN3Zf9aFtoVtZO7sP59KysrGDSLrXG/0Xge1H17B86euS21LO8i/vCW2vvvhJLKKsrJxi8gabdyN9+NrYyg6Fvl+BxY/oPf5tFOVtY2bRE4/PzyMj/mowUtKf06UJMh34JrGcQQ/KilrG7eJnNpMI9rHOayj8liMhchP5gf0nbEfqEpSVjduFDlt2Msy/kRS+fmz8R7s9THHbQ0W8v4+mfW9b0gifyopqxs3jBzdUtsYTOUjMe0rwQjy+okVGVrZcTtQsrJ+IreKnPB1do2BVNZEdtaerqxvfD5kzxhI5fVMd3lLqtlfg8j7B+a3uDpvk/FWnqx8IeTYAhhTqezcnuW9F2qw/j4GE1lrv6xbToZ80Hq34RkS457KBjJ++4+JvC7pvZXZ2NpRhVaUW0TeVp5kbCFbyvt9dxvy2h1jI9JHdz5uiTyAb2X2Nh2lHN/6V0G+mUXL2HwH7nqf9Ap3F7519X7M2na8S8hJ5FTltBC0j3y7JSL7XaadyvuF48T3J69fKeO7Yysf/yofhCrI3NrevCI2xhIZeAcucQkyeD/Ivo4HbJyWyvI4BD9XDpmurdWq7+/vCOQRTWRPGQI0D6i3sS2Y+rGtBDG2UlmsbARAGLg2kPGKmL5zkSObxsBsTYayCWfeOw+eJz+cT+3MhPHnmKDsRoEVtraQ4aq4xBHIJiw4I9exA7UuMc8L78MdHrI5P669IHzQ5ddAquzHIRS1RpDt7gep7bdZpMiWsY887tccD6ZfLh+I7H4VfrmreYzg9qKVwVCgQWPt3oohE50PYCxHhtNoJ97GMZAj5e06k4vsJ7Kzl55HVABmqz5pyN9E0KzYNoGM9D6QsRR5RJHXd6juFwk34vvdAlx+7SP/cj7zeFiHbfMA+H3dBoosUkaCAcXMCWwryDtzwFiIbBuPlvD8n8XMwTFSebv9GkS2PjKY++btGvO6FezYT6SMRcOP2Y0br+LIrjJsLEOGk2gP+uj0vpuyl8rH+3fv5rfCS2TjsG375Ghv0utO0pC/oZjd2PEqj2zXGDEWIru7Q6v73IyPg2VL2cpTeGan/QOe8bCv2/xqPX9w6pSIHIxZc8hGjTFjEfLo74Stn+9347TX3C+PfqI6R87u38eHbTwcKx+JOkhSmQgIEbP2kPcao8Yy5E+iHMb35dKExWxMu/YLK/YEbeZ4yDBYayerkYociFmDyNag3TfWJK7xyDNelQdr5ArIXxja+eB6J4m9drIeqch0zOoik70P2iARMtd4VR5Fl54w9NE1DiknI9MxowJWC/lbz3hkG8/K43inlFkPoT+vRI8DsPasqUzGrEnkb8pYJ5HHoxgOy914D5R3Xid1EWoZSrk7ax2BERHtVKZi1ibyN9EYATIeViN3DOf1v9DtXPBVKOCT1ppmYVl1opG/6Wg2iEwVATIzqAuzge0lKSuTH9sg17au0dtOairrR+zVkdGY+olj9dvzm3+IThvtqM3DrXEcoc0kpnJH9kJK7o9tYe9kaniIDrT3+0bsNbmbwZU7chQyFtDFYYQOvQzjAdjlUkfdx1adtdmbwSvVkaOQKWOsOH0sc8ou+7sV2EBKKndkx3iUGwO7UdrZFWYwo/XqyBHIYuMRCzRwtGU9ESVjxpQ7shgZDiUe/HEM5NI4PMwyhjZPbSo6lTuyHWWB8RgUHvB5vEjnUaLckYXIYBy3W328wgivHHmHHr0jeaR2HVmIjBozTXWQIXVcuSMrIC/hjdNRQt5OpDtyOjKUKetwcjSOEvKw1iOqv+7IZiDRRI630UIeElK5I9PIiYmsiYymckdORU4zVkRelS+CHFdnBjL4mFmqjB7ygKRy+DuoH7BGkRnK6Ynsnz6rIkemcoZ4nQ9ZqGB9XhN56Mj1kfeBqY7cLPKYjHz3JYsgB9bakY0QwmfJ/F1yfuQx6ky5I4eR+Qa5kYeOTNW3BPL+0HKjyOKgvRDystpY5FG8S854dP1nLTEXoo72S+P2Gsj7am9BZOzOCyFyxvPkwX7/OvvIa2++yPlFkG9mCSN/fkYE0Ed2fqmMjFRSgiyIXuvIN6fEIvMfKyuBHFVHH5kbwKaRAeD5l/mRxzaR59Z/i5wrIweUb14piez+smHkYBTxVdZF9tpgIVPKp0W+WchQjF4KGax9YeT2umsLmYrUCyBj9V6bWAg58ylUCvL3txsXyrk9ZGpPs/fXZZDdJ08bQTZ6a37YGkIOHEtYO+WYAHJhwAk/WIVtHIv8DSNTwauODE2GTO5dUpDZqUw/fEoUPnJUFYFdctg50O0VRGYI83fK6fOvxCrz1x+DjOySA86NILOAzf76FkCupsxcfWQF9wgxwmSXtpC/ycJEpqbvYiJHKnOR4+rHRfadqyJLhJ26RwYxrzL3UcfIL2FsrG71hjWlwlbF6Sh+qijLnXnPwFLVoxeNDhcespzIEcJGrUNh/NRQhp4uVjiFSptKNTZiaNwKIXPru1c5HMdPJWVrpfYNO9FPwKZOfR0ZtJrIgspuFWYEkkaOfAhdBXlMn988Mmy1kIVVVUKOfOxNBfl5p1kF5M25ArKkgjLkwDTXUcoayMvGE3clccjfbSObSc/bJ5OH1/NRcASRAjI+k4Qwkc+G7Oy7U5HHUXBCq468bDttrCbSuF1k/xg8tb+Ov1CohnxPG3V9MeRQXcFT6bRUHptATrng7cRCZFwaOfyFvDlFI5XHUTI0lQs5aQ5V9wAl9Q77isg3vwS+kW48SePKyInzLroX4F8T+QaW5P7afMVLXeToGfn8ROY6V0MOv61s/pBSf21eb6iNHDctzCC8k8YNanFk8g2iTuU1+mvnPRO1ke/++GZsb81iRoNWHhmpeFwqQ9PTtoMM3CTIRMZ3aa+AjFc6Apm+6t8CslMj4cz1N5lyReQbR9hNZWZ/TSlXHdZMNL7ZEeEp3yohu6f1ZG1jUplInGoXKBJr5CayHzxpIpdDDnU8zi+TU7nqVSjdRHYCKO6tSyGDexe4I5em8piSNhmQsVQWv/rLI20VGb6xHjphgpATlOveNJBmfMNII3vrUshuqt68xnjZzUUGX9BU+fYfoD7iFzWiyIh0Q8huzxPowblRHeNCmgc5oT43D5k8O7k5n6+EbCsz6ytMZSes0cRqyPH1AYyRX7l/pqJVEhnpebAuSJDKgzX6FU2jhxxZH1yUQg6mRBFk6FghRCxMZZ2iiBxVzDj48QklcnuvJwgSS1NZo1RGDuzSqHFOMlTVkOlDxUqp3AAy2d3h+dEAMpnK398UclHlushQNOidmmXc5GRtIeIKqWwhJx3CxRT8yCS0Y6s/ZwhOGbyjpXQqG8ijZF5llUIT0s5NIEfdRVw+lXfkMfkVU/ISOjohmG/VkSNuFZePYOuUDTn+GYz4wjk+wZgDUWoR2WxEWeUFeQRfXZC58A5QEOYGkMWPN7rKxSI9LndlpV2vjCucGGHMoRg1h+w2oWgqP59rTr4oHVWYBy4wczPI8mlOKnTYCjd8ZjX2nHkRKoIc9x6KCqnsXghuERnu7Mi1t4Ts9kXllWshi4y/3eOWRpCjDisqdNiVkKXG39YZSDg6zSDbuJVSuTqyrNNuEPkWqLKVwHWU6yA7h1AxOa2ITCkzGsInhh6NKqFcBdk1FjIzQlMSmTUy6/zO/OGcyDcAWdZrN4NMXYuCm1ZDuQIyYsxm5sSlKHJwvn3g90U77FrIfiS4zKy4FENmXBIH/yBqzeshQ7soCTMrKmWRyZtb4L/YvzgbstPy203ozAtKOeTAE+nYH75LKpdGxg5E2My8kBRGRhsUNC6iXBiZbjqDmRmRgsjEW8Ak+X0eZBBwbzmHmRmP0sjQQQb+Vf4ui7zc2DUmzfeWimwccQbTmRuPksjILGS8NC6hPK63/KTM3JhqbJ1XBJi50SiOTM4nGOqh8iofd2iWuMcL74bNAFDM7GAURQaezOSncX7l473ZOm9djTR2goMzs0NRHhl9kD5MnFl5n/A+YTJlDWPopgAgOPxIlEWmpsRgGWdV3iadL3BHbqiZVC7Lr79WQ4bGpsPEssZFIR/nT7kTeWtPQDk5kUsj+8pc4wKj2M7tuKWMA8p7VKKNiyOD09sw0tj8Uz7lOsbhq3M3f94VSQyqIDvKTOP8Fyui3mofR0ydZEDKbn8mikBxZOhul+De2P17LuUShWtMzsUga395ZGK+zZBx2UtSeQrf2L+L3v4Lf5uVkPHJqljGr6ssMcY/IWx8BWQklYVf52hlYMFtA8mfVjZGPyPcfC1kcgib1WVFhtpfzOpOkj7N3Da36aiydNs1kHmnEAHjWGVvqZtdUj4dZcx86CDBuA6ye80xyjhKGdAh2GSfjjUWK4u/XfWQ2Tec4h8WRxrQubkl9tPxxkJleRdSB5mpHIyCLNIgzvGz8xfZp5OMRQdfcuOmkRkxECQUkoEIm+zT7I3b1WYefaUmci1kjjLre85XronstWP/ma2cYFwNWfIwK+MjjHYjbMihlOzTUmN3VkxGLBKM6yGzJydjfQ8YLV8/5H8aXIvs02Jj91JDSDklj9tF5jV9/Qgr5Hg3C6nJPs0nviFjlEzlV0MmlXl5vF9h5QTd3tmCaMYfZJ+WGKcoxxknI+dR5vbV3gLsoGNq8Dg189Po1uyuGW9unjufKLUyyMRQFmN/7C0TizzAx8uyT2Mbc9sVqcz9HjeFPKS3GLjbU4Zs/gisQPZpeFNAHePaHGlcGTnwzDLDGJqboBVkvIZxyrHGtZEB5XhjXjKXQqZrGKEcbRyNrHJ4PQC7ZZkxeqBaGzloSbSJOhZVQv6bQtY9h9qjoWbMYC6BTLUhVjneWHgGlQEZe2iZMqZvnNlXIUG+2f+M/LT9Ic7TbGzlBOMGkC3lWGPk8IaBrH6eHGxCSBL8W4pxM8iussjYX4RgzovM+ZZGKOPf2TLIxZW9OICLoMzer0m1qE+zr6FylbWNKyCD96mKb7TnMvu/ZGQm69NMYvqbDDUmzTgBWbG/jnuqAAgLPk0YyQbesCf9NIwToYz1VPHRlZ5BZdkpi5Sx77mAOUMBty/6qvp/0zIW75JzIYOH2DHGBHM2Z3jbvP4Ib6T9U0r9VJELKPuxufkFWyaLM7Zhuj8KK2cwTkHWSWVImROZ4xc3PG65nImvlvzYwvqjnrH8uCsjsq8sML5Zf6aPWpWgqc6Dg8waEtCYVCEFWbu/9pQ5YXF+Q2eHXdSAvTM3RWVNY/7Bdb6dsjsowgqKBNl3Tnj4FBW+uYfFKfcqavQ7EbvknP21aAIz8FecHvDmlzjdG7oflqYyfTdjYlAjeutcwyFhZSgiEcYYNBpP7LPEetn1oZVVjCOGQvLulDmTijIS2VlQCM0pATT+ly78jVEzFiHn7K8ZN3CGjf29ZDiTFIC1lXWM43rrvP01qgwFgxVRhgzT+ptR3I+GF8XWrmQc11tn7q9Dc/YTvyOMeUKwNm9J0RcP3GRm43RkzVQm375B8hHIMikRKL29SGUtY7K3ppAz99cAMxEH73dwCPMZh3qOmA5bjTi6t87eX/vKXGMehBY5XAF5KiOL6BprICunMuOOIF6K4ktGunKR5co5jON7a/okKp8yHUvKOKILYHxfkBXFIbvLKxsLT6DK9NeQcoQU0QXkRpYp5zFO6K0DyFmUv6M6a+hjt0TkMB72bRBsRd04ArlEf00OZCskcnlkzhZVjZN668Chl7Iy75ojF/morxSZf8krWvlW0LgV5CEQRWYi50ZWS2Vl41RkqL/Oocwb4wxcnASXTUAOPrfl/x74fmDr14vd3yRS2LhUKsPJDGQUF9lobj5kYMP+ksgyiqFLTeSqynC3yTLWQQ4+0EOnMrhUi8blkPGRbDSiOHKKsadKrIv4ZsJLqRMrI5dS9g94rPtwGemkhnwLrQtPZXAp/TQOGfOQA6lcThk1o43zIhOpXNw4PpHLdtj+8BcRshLIt28x8jda3wzEKp116VQmkjk2zHmRA6ns/zqbcRpy2VQOKAuQEy41WhtM+I5lN9ZK5NKpTDLjHkDcVZCDbxHFlfMT6yVyQ8qSGKfcNKCBDHymZWMQuYQy515IPJGVkK1CfNb5HfCJMsaxyKFU1ldmTh9NJnLa7T9s5NBV5GzEpnF6IgdHRHIoA302M8JZkAlK6guQr6cOG0uRy3fYg99nf/MCfPymEDLjT1lmMdHtrLFUzq3MYKYSuTQyPuiZJThBEjFyMJUrKVOJrIBsXqog1obUspSxUiIzUjmPcoCZTOQU5O905KzEYeMYZDiVCyhzppQGQpu4T/ZSmT6I9v+SlxgzTkvkFpRZFxlvXimEDFbs1Yz/Cq43FzLOzDFORAb+wV024wyQYYtI5DG85tLMRZG5vX9RYkxijET+C1n330WUIWaWceyTjb4ta335iS1jDCLWuLYyypwT+SZDLkCc2ZizW86qjDBD6Rf/uJuH/M1GLkGMGivskBtRhqebBmAccRVkeoW3IsQFjP9ibKEmsyayMzwaWGENYlQgEbkFZWRqcb8/VUNG1g8IZ542v4xxG8r0FPK6yN76qwmXM25FGZll3PpJHRn9TBHigsbowVdpZaLbLoVcUpgyVjzoCipXZUYPw6KRA8sXTWKSOIfxX6ytFWKm3h2ggMwALiHsEBNRV0NuS9mdp9rliEdmABcRrmIsUC7ETL4qIhtwIWGXuJCxRLkUM/3GCH3gUsIecTFjSrkes/9+gVzAxYRDxFmNbeVQMpdjhl8koahbEhggpiKtb/wXe9vFmbE3hqTzFgWGiMk4Z0Amlasz46+GIcQDixRuQJC4gHFAGWIu7RyUZpfiFf87TFzEOCKZazgnUteoLxy5OsRRyVwLWmxdqZJYzCqlMUMZZa7lTIvXrhMqHApsXuOgMs7cgnRDhYpTKKq5jcPKJPPVuTmxCYY0v7EWs1Jpx0aptEHsKVdmzsddoRHhUJYy5ihXcVaErlF7ThjLGXvKcP1e1rkZYS+CJY19ZaSSL+hco8bc4JU1FjC/lHONurLjVpwYUkar+yIHYhUqKYlYDWNImah0BeqmicWRqmMcw1yYuzni6OhUI4aZee3QKkrKKjb52lSVGE7mwjGhtVOIW2lHbWOEuZn4MJgbF26BGGVuKExi4mZq3gwxwdxMtCTErdS5MWKKuZGYcY3bqG2bxCRzjcixlJusaMvENHOFCIaVG6vgSxAHlQuHMqTcTMVey5jrrFiimZNWlLnUNmyPmTRClaMW78SNOsPK8iW7cMvOkLJ0qS7clnPwpuUwcZ1619Z6MWiRWhPEtZVeEpoPV5+4ts7rUnPtqhrXFnl9a5ZeJeLaBq9WUpj5xLVb2cuzcJhlf+26LRapcti4dot6gYpEOWRcuy294IWrTBvXbkUvdCGVg7/uxi9SKGbqd534pUpQmTCuXfde2IVWxo1r17sXSaGUu/FpCnGQjRjXrnEv8sJQ7sYvX2TItWvbS1wJKXfjMxRauRufo1DK3fgsBVfuxucpoQHObnyGEkauXcNe0guo3I1PVmjk2rXrRaUAqdwT+XSFQq5dt160iqvcjU9YOvIViq3cjU9ZrGOvftR10gIj165VL6rlb7DUrlUvuqUbX6F04wuUjnyF0o0vUDryBUpHvkLpxhcoHfkKpRtfoHTkC5SOfIXSjS9QOvIFSke+QunGFygd+QqlG1+gdOQLlI58hdKNL1A68gVKR75C6cYXKB25l1566aWXNsv/ARZoklzB78wNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA1LTIxVDE2OjE2OjU2KzAyOjAw4I/zGgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNS0yMVQxNjoxNjo1NiswMjowMJHSS6YAAAAASUVORK5CYII=",
        width: 400,
        opacity: 0.1,

        absolutePosition: { x: 100, y: 180 },
      };
    },

    content: [details],
    footer: pdfFooter,
  };

  return pdfMake.createPdf(pageDefinition).open();
}

export default ClientesPDF;
