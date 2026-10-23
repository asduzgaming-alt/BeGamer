export const whatsapp={number:'51948719062',display:'+51 948 719 062'};
export const socials=[
 {id:'facebook',name:'Facebook',url:'https://www.facebook.com/begamer.gg/'},
 {id:'instagram',name:'Instagram',url:'https://www.instagram.com/begamer.gg/'},
 {id:'linkedin',name:'LinkedIn',url:'https://www.linkedin.com/company/begamer'}
] as const;
export const whatsappUrl=(message:string)=>`https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
