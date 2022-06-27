export class UtilHelper {

    static htmlToText = (html: string) => {
        html = html.replace(/<style([\s\S]*?)<\/style>/gi, "");
        html = html.replace(/<script([\s\S]*?)<\/script>/gi, "");
        html = html.replace(/<\/div>/gi, "");
        html = html.replace(/<\/li>/gi, "");
        html = html.replace(/<li>/gi, "");
        html = html.replace(/<\/ul>/gi, "");
        html = html.replace(/<\/p>/gi, "");
        html = html.replace(/<br\s*[\/]?>/gi, "");
        html = html.replace(/<[^>]+>/gi, "");
        html = html.replace(/&lt;br&gt;/g, "");
        return html;
    };

}