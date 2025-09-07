interface ForSectionProps extends Record<'title' | 'text' , string> {};
export function Section ({title , text} : ForSectionProps) {
    return (
        <section className="sectionFirstPage">
            <h1>{title}</h1>
            <p>{text}</p>
        </section>
    )
};

export function SectionForMain () {
    const textForSection = {
        title: 'Okeanlar və Dənizlər üzrə Viktorina',
        description: `Dünyanın müxtəlif okeanları və 
        dənizləri haqqında biliklərinizi sınayın! Hər sual 
        sizə yeni məlumat öyrətmək və əyləncəli yarış təcrübəsi 
        təqdim etmək üçün nəzərdə tutulub. Hazırsınızmı? Başlayaq!`, 
    }
    return(
        <Section
        title ={textForSection.title} 
        text={textForSection.description}
        />
    )
}