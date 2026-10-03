import Zip from "https://esm.sh/adm-zip@0.6.1"

export default {
    async fetch() {
        const zip = new Zip
    
        zip.addLocalFolder(".")
    
        const buffer = zip.toBuffer()
    
        return new Response(buffer, {
            status: 200,
            headers: {
                "Content-Type": "application/zip",
            },
        })
    }
}
