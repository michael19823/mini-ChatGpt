# Check: Portugal | F-gas equipment records and leak-check scheduler (claimed 4.5/10)

Checked 2026-10-08.

1. Duty holder: **confirmed, with a caveat already in the report.** The APA page says the operator keeps the RAE per circuit, and the annual communication "deve ser feita em nome do detentor dos equipamentos". APCMC (30 Jan 2026) says the duty falls on "os donos do equipamento ou as empresas prestadoras de serviços", depending on the contract. So by default the duty sits with the equipment owner, not with the buyer (the service firm). The report already says this and prices it in. https://apambiente.pt/en/node/1205 ; https://apcmc.pt/noticias/gases-fluorados-com-efeito-de-estufa-2025-comunicacao-ate-31-de-marco/
2. 31 March deadline and currency: **confirmed.** APCMC (Jan/Feb 2026) says art. 5 of DL 145/2017 implements Reg. (EU) 2024/573 in Portugal, and that 2025 data were due by 31 March 2026 in SILiAmb. APA calls late filing a "contraordenação ambiental leve". An APA document from Dec 2025 says DL 145/2017 is "em revisão", and no replacement decree was found. The APA page itself still cites 517/2014. https://apcmc.pt/noticias/gases-fluorados-com-efeito-de-estufa-2025-comunicacao-ate-31-de-marco/
3. Competition: **confirmed (no Portuguese SILiAmb-aware product found), with additions.** EU tools exist that do the generic job:
   - Odoo "HVAC Management" module by SvN Solutions, Belgium: circuit register, automatic CO2e, 3/6/12-month leak-check scheduling and "F-gas annual reports". About USD 559 one-off. It cites 517/2014, does not mention SILiAmb and does not state its languages.
   - Joblogic/Refcom F-gas logbook (UK).
   - KoudSmart/OutSmart (NL).
   - A-Gas GTO (German, Dutch and French added).
   - Fieldmotion (UK/IE).
   - Climalife F-Gas Solutions app: free, English listing, calculator and leak-check frequency only, no register.
   - EFCTC free logbook spreadsheet.

   None of these shows Portuguese language or SILiAmb export. Odoo is used by Portuguese SMEs, so the "may close" risk is a little higher than reported, but this does not change the score. https://apps.odoo.com/apps/modules/19.0/hvac_management ; https://apps.apple.com/gb/app/f-gas-solutions/id928450681 ; https://www.joblogic.com/features/fgas-compliance-software/ ; https://out-smart.com/features/koudsmart
4. Market count: **confirmed for CERTIF; the total across all bodies is unverifiable.** I downloaded the CERTIF list again today and it has exactly 2,070 distinct SAC certificate numbers, many of them small "Unipessoal, Lda" firms. No public APA or IPAC total covering eiC, SGS and APCER was found in search, so the national total is not available, not wrong. https://www.certif.pt/pdf/lista_empresas_servicos_certificados.pdf
5. Overlap: **confirmed, no overlap.** inputs/countries/portugal.md has no mention of F-gas, AVAC/HVAC or refrigeration. Its only SILiAmb item is e-GAR/MIRR waste, which is a different workflow. File: /home/user/mini-ChatGpt/rerun/inputs/countries/portugal.md

Suggested score: 4.5/10. Every claim held up. The weaknesses (the owner is the default duty holder, weak enforcement, unproven willingness to pay, generic EU tools such as the Odoo module) are already in the report's score, and I found no problem that changes it.

## Searches run
- WebSearch: software gases fluorados registo equipamentos fugas técnicos aplicação
- WebSearch: Decreto-Lei 145/2017 alteração 2025 gases fluorados Regulamento 2024/573 novo decreto-lei
- WebSearch: software registo gases fluorados RAE manutenção AVAC Portugal fugas certificado técnico app
- WebSearch: software gestión gases fluorados registro equipos control de fugas empresas frigoristas app Portugal portugués
- WebSearch: F-gas logbook app multilingual Portuguese refrigerant tracking leak check software HVAC service companies EU
- WebSearch: "gases fluorados" software assistência técnica "registo de equipamento" OR "folha de intervenção" ... PHC OR Primavera OR app
- WebSearch: programa gestión SAT frigoristas registro gases fluorados control fugas RD 115/2017 software libro registro equipos
- WebSearch (extended): aplicação registo intervenções gases fluorados técnicos frio climatização carga CO2 equivalente deteção de fugas agendamento empresa
- WebSearch: field service software refrigerant F-gas register Portuguese language ... Kältemittel Logbuch software mehrsprachig
- WebSearch: VDKF-LEC Sprachen languages Portuguese (no useful result)
- WebSearch: número de empresas certificadas gases fluorados Portugal APA lista entidades certificação CERTIF eiC SGS APCER
- WebFetch: apambiente.pt/en/node/1205; apcmc.pt 2025 communication post; App Store F-Gas Solutions; apps.odoo.com hvac_management
- curl + pdftotext: CERTIF list (2,070 distinct SAC numbers)
