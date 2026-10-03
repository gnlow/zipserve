import Zip from "https://esm.sh/adm-zip@0.6.1"
import { format } from "https://esm.sh/jsr/@std/fmt@1.0.10/bytes"

export default {
    async fetch() {
        console.log("got req")
        const zip = new Zip
    
        zip.addLocalFolder(".")
    
        const buffer = zip.toBuffer()
        console.log(`zipped ${format(buffer.byteLength)}`)
    
        return new Response(buffer, {
            status: 200,
            headers: {
                "Content-Type": "application/zip",
            },
        })
    }
}
