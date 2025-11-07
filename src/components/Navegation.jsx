export default function Navegation({
    children, 
    modeloCaixa,
    justificacao,
    }){

    const style = `
    ${modeloCaixa}
    ${justificacao}
    `
    return <nav className={style}>{children}</nav>;
}