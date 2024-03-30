import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'morocco':'  ‎أوامر للمغاربة',
  'applications':'‎ أوامر التطبيقات‎',
  'drawing':'‎ توليد الصور‎ أوامر' ,
  'ai':'‎ الذكاء الاصطناعي‎ أوامر',
  'infobot':'‎ معلومات البوت‎',
  'downloader':'‎ أوامر التحميلات',
  'anime':'‎ أوامر عن  الأنيم',
  'islam':'‎ الدين هو الاسلام‎',
  'owner':'‎ اوامر صاحب البوت',
  'search':'‎ أوامر البحث',
  'audio-changer':'‎ تعديل الصوتيات‎',
  'sticker':'‎ أوامر الملصقات',
  'image-edit':'‎ تعديل الصور',
  'pdf':'‎ pdf ومشتقاته‎',
  'uploader':'‎‎ رفع الملفات‎',
}
const defaultMenu = {
  before: `╭────《 𝐃𝚫𝚪𝐊-𝐒𝚮𝚫𝚴-𝚳𝐃 》─────⊷
```│ ☯︎ │ ╭──────────────◆

│ ☯︎ │ User:- ...soltan

│ ☯︎ │ Theme:- 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙽 𝙼𝙳

│ ☯︎ │ Prefix:- [ . ]

│ ☯︎ │ Owner:- DARK-SHAN-MD

│ ☯︎ │ Plugins:- 280

│ ☯︎ │ Users:- 37411

│ ☯︎ │ Uptime:- 13 m, 50 s

│ ☯︎ │ Mem:- 32.1 GB/61.79 GB

│ ☯︎ │ Time:- 22:56:38

│ ☯︎ │ Date:- 30/03/2024

│ ☯︎ ╰──────────────◆

╰───────────────⊷⃟


```╭────❲ *ʀᴇᴀᴄᴛɪᴏɴ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴘᴏᴋᴇ
│✺│⥃◈ ʜᴜɢ
│✺│⥃◈ ʜᴏʟᴅ
│✺│⥃◈ ʜɪꜰɪ
│✺│⥃◈ ʙɪᴛᴇ
│✺│⥃◈ ʙʟᴜꜱʜ
│✺│⥃◈ ᴘᴜɴᴄʜ
│✺│⥃◈ ᴘᴀᴛ
│✺│⥃◈ ᴋɪꜱꜱ
│✺│⥃◈ ᴋɪʟʟ
│✺│⥃◈ ʜᴀᴘᴘʏ
│✺│⥃◈ ᴅᴀɴᴄᴇ
│✺│⥃◈ ʏᴇᴇᴛ
│✺│⥃◈ ᴡɪɴᴋ
│✺│⥃◈ ꜱʟᴀᴘ
│✺│⥃◈ ʙᴏɴᴋ
│✺│⥃◈ ʙᴜʟʟʏ
│✺│⥃◈ ᴄʀɪɴɢᴇ
│✺│⥃◈ ᴄᴜᴅᴅʟᴇ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *Aɴɪᴍᴇ Pɪᴄꜱ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴡᴀɪꜰᴜ
│✺│⥃◈ ɴᴀʀᴜᴛᴏ
│✺│⥃◈ ɴᴇᴋᴏ
│✺│⥃◈ ꜰᴏxɢɪʀʟ
│✺│⥃◈ ᴀɴɪᴍᴇɴᴇᴡꜱ
│✺│⥃◈ ʟᴏʟɪ
│✺│⥃◈ ᴘᴏᴋᴇᴍᴏɴ
│✺│⥃◈ ᴍᴀɴɢᴀ
│✺│⥃◈ ᴀɴɪᴍᴇ
│✺│⥃◈ ᴡᴀʟʟᴘᴀᴘᴇʀ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ɪɴꜱᴛᴀ
│✺│⥃◈ ᴀᴘᴋ
│✺│⥃◈ ᴛᴛꜱ
│✺│⥃◈ ʏᴛꜱ
│✺│⥃◈ ᴠɪᴅᴇᴏ
│✺│⥃◈ ᴘʟᴀʏ
│✺│⥃◈ ᴘɪɴᴛ
│✺│⥃◈ ᴍᴇᴅɪᴀꜰɪʀᴇ
│✺│⥃◈ ʏᴛᴍᴘ4
│✺│⥃◈ ʏᴛᴍᴘ3
│✺│⥃◈ ʏᴛᴅᴏᴄ
│✺│⥃◈ ᴀᴜᴅɪᴏ
│✺│⥃◈ ᴛɪᴋᴛᴏᴋ
│✺│⥃◈ ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
│✺│⥃◈ ꜰʙ
│✺│⥃◈ ꜰʙꜱ
│✺│⥃◈ ɢɪᴛᴄʟᴏɴᴇ
│✺│⥃◈ ꜱᴏɴɢ
│✺│⥃◈ ꜱᴘᴏᴛɪꜰʏ
│✺│⥃◈ ᴛᴋ
│✺│⥃◈ ᴛᴡɪᴛᴛᴇʀ
│✺│⥃◈ ɢᴅʀɪᴠᴇ
│✺│⥃◈ xɴxxᴅʟ
│✺│⥃◈ ᴘʟᴀʏʟɪꜱᴛ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴜꜱᴇʀ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴘᴀꜱᴛᴇ
│✺│⥃◈ ᴘᴀꜱᴛᴇʙɪɴ
│✺│⥃◈ ꜰᴜʟʟᴘᴘ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ꜰᴜɴ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴅᴇʟᴛᴛᴛ
│✺│⥃◈ ᴛᴛᴛ
│✺│⥃◈ ꜱʜɪᴘ
│✺│⥃◈ ϙᴜᴇꜱᴛɪᴏɴ
│✺│⥃◈ ᴛʀᴜᴛʜ
│✺│⥃◈ ᴅᴀʀᴇ
│✺│⥃◈ ꜰᴀᴄᴛ
│✺│⥃◈ ϙᴜᴏᴛᴇꜱ
│✺│⥃◈ ᴅᴇꜰɪɴᴇ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴡʜᴀᴛꜱᴀᴘᴘ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ꜱᴀᴠᴇ
│✺│⥃◈ ᴘᴛᴠ
│✺│⥃◈ #
│✺│⥃◈ ꜱᴀᴠᴇ1
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴡᴀᴛꜱᴜꜱɪ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴀꜰᴋ
│✺│⥃◈ ᴅᴇʟᴀꜰᴋ
│✺│⥃◈ ɢᴊɪᴅ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴀᴅᴍɪɴ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴍɪꜱᴄ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ɢʀᴏᴜᴘʙʀᴏᴀᴅ
│✺│⥃◈ ᴠᴠ
│✺│⥃◈ ᴜᴘᴛɪᴍᴇ
│✺│⥃◈ ᴇxᴇᴄ
│✺│⥃◈ ʀᴇᴀᴅᴍᴏʀᴇ
│✺│⥃◈ ᴡᴀᴍᴇ
│✺│⥃◈ ᴘɪᴄᴋ
│✺│⥃◈ ꜰʟɪᴘᴛᴇxᴛ
│✺│⥃◈ ᴍᴘ4ꜰʀᴏᴍᴜʀʟ
│✺│⥃◈ ᴇᴍɪx
│✺│⥃◈ ᴇʙɪɴᴀʀʏ
│✺│⥃◈ ᴅʙɪɴᴀʀʏ
│✺│⥃◈ 1.1
│✺│⥃◈ 1.2
│✺│⥃◈ ᴜɴʙᴀɴ
│✺│⥃◈ ᴜʀʟ
│✺│⥃◈ ᴛʀᴛ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ɢᴇɴᴇʀᴀʟ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ʜᴇʟᴘ
│✺│⥃◈ ʟɪꜱᴛ
│✺│⥃◈ ᴏᴡɴᴇʀ
│✺│⥃◈ ᴀʟɪᴠᴇ
│✺│⥃◈ ᴅᴇʟʙɢᴍ
│✺│⥃◈ ᴀʟʟʙɢᴍ
│✺│⥃◈ ᴀᴅᴅʙɢᴍ
│✺│⥃◈ ᴄʜᴀᴛɢᴘᴛ
│✺│⥃◈ ʀᴇᴘᴏ
│✺│⥃◈ ꜱᴛᴀᴛᴜꜱ
│✺│⥃◈ ᴄᴘᴜ
│✺│⥃◈ ᴛʜᴇᴍᴇ
│✺│⥃◈ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
│✺│⥃◈ ᴘɪɴɢ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴛᴏᴏʟ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴘʟᴜɢɪɴꜱ
│✺│⥃◈ ʀᴇᴍᴏᴠᴇ
│✺│⥃◈ ɪɴꜱᴛᴀʟʟ
│✺│⥃◈ ʀᴇꜱᴛᴀʀᴛ
│✺│⥃◈ ᴜᴘᴅᴀᴛᴇ
│✺│⥃◈ ᴜᴘᴅᴀᴛᴇɴᴏᴡ
│✺│⥃◈ ɢᴇᴛᴠᴀʀ
│✺│⥃◈ ɢᴇᴛᴀʟʟᴠᴀʀ
│✺│⥃◈ ꜱᴇᴛᴠᴀʀ
│✺│⥃◈ ᴅᴇʟᴠᴀʀ
│✺│⥃◈ ʀᴇᴍᴏᴠᴇʙɢ2
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴀɪ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴀɪ
│✺│⥃◈ ʟᴇxɪᴄᴀ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴀᴜᴅɪᴏ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ʙᴀꜱꜱ
│✺│⥃◈ ʙʟᴏᴡɴ
│✺│⥃◈ ᴅᴇᴇᴘ
│✺│⥃◈ ꜰᴀꜱᴛ
│✺│⥃◈ ʀᴇᴠᴇʀꜱᴇ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴄᴏɴᴠᴇʀᴛᴇʀ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴘʜᴏᴛᴏ
│✺│⥃◈ ϙᴜᴏᴛᴇʟʏ
│✺│⥃◈ ꜰᴀɴᴄʏ
│✺│⥃◈ ᴛɪɴʏ
│✺│⥃◈ ᴛᴏᴀᴜᴅɪᴏ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ꜱᴛɪᴄᴋᴇʀ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴄɪʀᴄʟᴇ
│✺│⥃◈ ᴄʀᴏᴘ
│✺│⥃◈ ʀᴏᴜɴᴅ
│✺│⥃◈ ᴀᴛᴛᴘ
│✺│⥃◈ ᴛᴛᴘ
│✺│⥃◈ ꜱᴛᴇᴀʟ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴛᴇxᴛᴘʀᴏ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴅᴇᴇᴘꜱᴇᴀ
│✺│⥃◈ ʜᴏʀʀᴏʀ
│✺│⥃◈ ᴡʜɪᴛᴇʙᴇᴀʀ
│✺│⥃◈ ᴊᴏᴋᴇʀ
│✺│⥃◈ ᴍᴇᴛᴀʟʟɪᴄ
│✺│⥃◈ ꜱᴛᴇᴇʟ
│✺│⥃◈ ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
│✺│⥃◈ ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
│✺│⥃◈ ʟᴜxᴜʀʏ
│✺│⥃◈ ɢʟᴜᴇ
│✺│⥃◈ ꜰᴀʙʀɪᴄ
│✺│⥃◈ ᴛᴏxɪᴄ
│✺│⥃◈ ᴀɴᴄɪᴇɴᴛ
│✺│⥃◈ ᴄʟᴏᴜᴅ
│✺│⥃◈ ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
│✺│⥃◈ ᴛʜᴜɴᴅᴇʀ
│✺│⥃◈ ꜱᴄɪꜰɪ
│✺│⥃◈ ꜱᴀɴᴅ
│✺│⥃◈ ʀᴀɪɴʙᴏᴡ
│✺│⥃◈ ᴘᴇɴᴄɪʟ
│✺│⥃◈ ɴᴇᴏɴ
│✺│⥃◈ ᴍᴀɢᴍᴀ
│✺│⥃◈ ʟᴇᴀᴠᴇꜱ
│✺│⥃◈ ɢʟɪᴛᴄʜ
│✺│⥃◈ ᴅɪꜱᴄᴏᴠᴇʀʏ
│✺│⥃◈ ᴄʜʀɪꜱᴛᴍᴀꜱ
│✺│⥃◈ ᴄᴀɴᴅʏ
│✺│⥃◈ 1917
│✺│⥃◈ ʙʟᴀᴄᴋᴘɪɴᴋ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴇᴄᴏɴᴏᴍʏ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴅᴀɪʟʏ
│✺│⥃◈ ʀᴇꜱᴇᴛᴡᴀʟʟᴇᴛ
│✺│⥃◈ ᴄᴀᴘᴀᴄɪᴛʏ
│✺│⥃◈ ᴅᴇᴘᴏꜱɪᴛ
│✺│⥃◈ ʟʙ
│✺│⥃◈ ᴛʀᴀɴꜱꜰᴇʀ
│✺│⥃◈ ᴡᴀʟʟᴇᴛ
│✺│⥃◈ ɢɪᴠᴇ
│✺│⥃◈ ʙᴀɴᴋ
│✺│⥃◈ ʀᴏʙ
│✺│⥃◈ ᴡɪᴛʜᴅʀᴀᴡ
│✺│⥃◈ ɢᴀᴍʙʟᴇ
│✺│⥃◈ ꜱʟᴏᴛ2
│✺│⥃◈ ꜱʟᴏᴛ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴇᴅɪᴛᴏʀ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴘɪᴄᴇᴅɪᴛᴏʀ
│✺│⥃◈ ᴀᴅꜱ
│✺│⥃◈ ᴘɪxᴇʟᴀᴛᴇ
│✺│⥃◈ ʜᴏʀɴʏ
│✺│⥃◈ ʀᴀɪɴʙᴏ
│✺│⥃◈ ʙᴡ
│✺│⥃◈ ʙʀɪɢʜᴛ
│✺│⥃◈ ʀᴇᴅ
│✺│⥃◈ ʙʟᴜᴇ
│✺│⥃◈ ɢʀᴇᴇɴ
│✺│⥃◈ ɢᴀʏ
│✺│⥃◈ ᴘᴀꜱꜱᴇᴅ
│✺│⥃◈ ᴡᴀꜱᴛᴇᴅ
│✺│⥃◈ ɢʟᴀꜱꜱ
│✺│⥃◈ ᴜɴᴄᴏᴠᴇʀ
│✺│⥃◈ ᴊᴀɪʟ
│✺│⥃◈ ɪɴᴠᴇʀᴛ
│✺│⥃◈ 2ɪɴᴠᴇʀᴛ
│✺│⥃◈ ᴄᴏᴍʀᴀᴅᴇ
│✺│⥃◈ ɢᴏʟᴅᴇɴ
│✺│⥃◈ ꜱɪᴍᴘᴄᴀʀᴅ
│✺│⥃◈ ᴛʜʀᴇꜱʜᴏʟᴅ
│✺│⥃◈ ᴄʟᴏᴡɴ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *NEWS* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴇꜱᴀɴᴀ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴏᴡɴᴇʀ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴊᴏɪɴ
│✺│⥃◈ ᴜɴʙʟᴏᴄᴋ
│✺│⥃◈ ᴜᴊɪᴅ
│✺│⥃◈ ʙʟᴏᴄᴋ
│✺│⥃◈ ᴀᴅᴅɴᴏᴛᴇ
│✺│⥃◈ ϙʀ
│✺│⥃◈ ꜱʜᴇʟʟ
│✺│⥃◈ ᴇᴠᴀʟ
│✺│⥃◈ ᴅᴇʟɴᴏᴛᴇ
│✺│⥃◈ ᴅᴇʟᴀʟʟɴᴏᴛᴇꜱ
│✺│⥃◈ ʙᴀɴ
│✺│⥃◈ ᴀʟʟɴᴏᴛᴇꜱ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ɢʀᴏᴜᴘ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ʀᴇᴠᴏᴋᴇ
│✺│⥃◈ ɪɴᴠɪᴛᴇ
│✺│⥃◈ ꜱᴛɪᴄᴋᴇʀ
│✺│⥃◈ ꜱᴘ
│✺│⥃◈ ᴡᴀʀɴ
│✺│⥃◈ ᴛᴀɢᴀʟʟ
│✺│⥃◈ ᴋɪᴋ
│✺│⥃◈ ɴᴜᴍ
│✺│⥃◈ ʀᴡᴀʀɴ
│✺│⥃◈ ᴘᴏʟʟ
│✺│⥃◈ ᴘʀᴏꜰɪʟᴇ
│✺│⥃◈ ʀᴀɴᴋ
│✺│⥃◈ ᴘʀᴏᴍᴏᴛᴇ
│✺│⥃◈ ᴋɪᴄᴋ
│✺│⥃◈ ᴍᴇᴍᴇɢᴇɴ
│✺│⥃◈ ɢʀᴏᴜᴘ
│✺│⥃◈ ɢʀᴏᴜᴘᴘɪᴄ
│✺│⥃◈ ᴛᴀɢ
│✺│⥃◈ ɢʀᴏᴜᴘ
│✺│⥃◈ ᴀᴅᴅ
│✺│⥃◈ ɢᴇᴛᴊɪᴅꜱ
│✺│⥃◈ ᴅᴇᴍᴏᴛᴇ
│✺│⥃◈ ᴅᴇʟ
│✺│⥃◈ ᴄʜᴇᴄᴋᴡᴀʀɴ
│✺│⥃◈ ᴀɴᴛɪʟɪɴᴋ
│✺│⥃◈ ᴀᴄᴛ
│✺│⥃◈ ᴅᴇᴀᴄᴛ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴘʀᴀɴᴋ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ʜᴀᴄᴋ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ɴᴇᴡꜱ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ɪᴏꜱ
│✺│⥃◈ ꜱɪʀᴀꜱᴀ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴍᴀᴛʜꜱ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴍᴀᴛʜꜱ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴄᴏʀᴇ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
│✺│⥃◈ ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
│✺│⥃◈ ᴄʜᴀᴛʙᴏᴛ
│✺│⥃◈ ʙᴏᴛ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ꜱᴇᴀʀᴄʜ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ɴᴘᴍ
│✺│⥃◈ ꜱꜱ
│✺│⥃◈ ᴍᴏᴠɪᴇ
│✺│⥃◈ ᴡᴇᴀᴛʜᴇʀ
│✺│⥃◈ ʜᴏʀᴏ
│✺│⥃◈ ɢᴏᴏɢʟᴇ
│✺│⥃◈ ɪᴍᴀɢᴇ
│✺│⥃◈ ᴄᴏᴜᴘʟᴇᴘᴘ
│✺│⥃◈ ɪꜱᴡᴀ
│✺│⥃◈ ᴄʀɪᴄᴋᴇᴛ
│✺│⥃◈ ᴡɪᴋɪᴘᴇᴅɪᴀ
│✺│⥃◈ ᴘʟᴀʏꜱᴛᴏʀᴇ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ɴꜱꜰᴡ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴄᴏꜱᴘʟᴀʏ
│✺│⥃◈ ᴇᴄᴄʜɪ
│✺│⥃◈ ʜᴇɴᴛᴀɪ
│✺│⥃◈ ʜᴇɴᴛᴀɪᴠɪᴅ
│✺│⥃◈ ʀᴀɴᴀʟ
│✺│⥃◈ ʀᴘᴜꜱꜱʏ
│✺│⥃◈ ꜱᴏʟᴏ
│✺│⥃◈ ᴠɪxᴇɴ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴍᴏᴅᴇʀᴀᴛɪᴏɴ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ᴀᴍᴜᴛᴇ
│✺│⥃◈ ᴀᴜɴᴍᴜᴛᴇ
│✺│⥃◈ ᴅᴜɴᴍᴜᴛᴇ
│✺│⥃◈ ᴅᴍᴜᴛᴇ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ᴛᴇꜱᴛ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ ꜱᴇꜱꜱɪᴏɴ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
╭────❲ *ꜱʜᴇᴀʀᴄʜ* ❳────╮
┃✺╭────────────···▸
┻✺│
│✺│⥃◈ xɴxxꜱᴇᴀʀᴄʜ
┳✺│
┃✺╰────────────···▸
╰━═════════════━⦁┄⃟
*⭐️Type:* _.help cmd_ name to know more about specific command.
*Eg:* _.help attp_
🃏 *𝔻𝔸ℝ𝕂 𝕊ℍ𝔸ℕ 𝕄𝔻* 🀄 `,}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

 conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: 'BOBIZA BOT ♥',
body: "أول بوت واتساب في العالم العربي 💖",
thumbnailUrl: 'https://telegra.ph/file/2829c7653514416d207e2.jpg',
sourceUrl: 'https://www.instagram.com/mouhaobass12',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

    /*conn.sendFile(m.chat, 'menu.png', text.trim(), m, null, )
    /*conn.sendButton(m.chat, text.trim(), '▢ DyLux  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff', pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ],m, rpl)*/

  } catch (e) {
    conn.reply(m.chat, '❎ هناك خطأ في لائحة الاوامر', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['infobot']
handler.command = ['menu','b','list'] 
handler.register = false


export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
