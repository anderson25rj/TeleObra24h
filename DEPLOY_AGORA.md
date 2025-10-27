# Deploy Imediato - TeleObra24h

**Status Atual:**
- ✅ Código no GitHub: https://github.com/anderson25rj/TeleObra24h
- ✅ Vercel CLI instalado
- ⏳ Aguardando deploy das 3 versões

---

## Opção A: Deploy via Web (RECOMENDADO - 10 minutos)

### Passo 1: Acesse o Vercel Dashboard
1. Abra: https://vercel.com/dashboard
2. Faça login (você já está logado)

### Passo 2: Importar do GitHub
1. Click em **"Add New..."** (botão superior direito)
2. Selecione **"Project"**
3. Na lista de repositórios, encontre: **"anderson25rj/TeleObra24h"**
4. Click em **"Import"**

### Passo 3: Configurar V1 (Primeira versão)
```
Project Name:         teleobra24h-v1
Framework Preset:     Next.js
Root Directory:       apps/v1        ← IMPORTANTE!
Build Command:        npm run build  (deixar padrão)
Output Directory:     .next          (deixar padrão)
Install Command:      npm install    (deixar padrão)
Node.js Version:      20.x           (deixar padrão)

Environment Variables: (deixar vazio por enquanto)
```

5. Click **"Deploy"**
6. Aguarde 2-3 minutos
7. **COPIE A URL** que aparece (ex: https://teleobra24h-v1.vercel.app)

### Passo 4: Repetir para V2
1. Volte ao dashboard: https://vercel.com/dashboard
2. Click **"Add New..." → "Project"**
3. Selecione **"anderson25rj/TeleObra24h"** novamente
4. Click **"Import"**
5. Configure:
```
Project Name:         teleobra24h-v2
Root Directory:       apps/v2        ← MUDE AQUI!
```
6. Click **"Deploy"**
7. **COPIE A URL**

### Passo 5: Repetir para V3
1. Volte ao dashboard: https://vercel.com/dashboard
2. Click **"Add New..." → "Project"**
3. Selecione **"anderson25rj/TeleObra24h"** novamente
4. Click **"Import"**
5. Configure:
```
Project Name:         teleobra24h-v3
Root Directory:       apps/v3        ← MUDE AQUI!
```
6. Click **"Deploy"**
7. **COPIE A URL**

---

## Opção B: Deploy via CLI (Com seu token)

Se preferir usar o terminal:

```bash
# 1. Fazer login (abrirá navegador)
vercel login

# 2. Deploy V1
cd /root/Claude-Code-Master/active-projects/TeleObra24h/apps/v1
vercel --prod

# 3. Deploy V2
cd /root/Claude-Code-Master/active-projects/TeleObra24h/apps/v2
vercel --prod

# 4. Deploy V3
cd /root/Claude-Code-Master/active-projects/TeleObra24h/apps/v3
vercel --prod
```

---

## URLs Esperadas

Após o deploy, você terá:

- **V1 - Confiança Profissional:** https://teleobra24h-v1.vercel.app
- **V2 - Vibrante e Moderno:** https://teleobra24h-v2.vercel.app
- **V3 - Minimalista Premium:** https://teleobra24h-v3.vercel.app

---

## Teste Após Deploy

Para cada URL:
1. Abra no navegador
2. Teste no celular também
3. Navegue pelas 5 páginas:
   - Home (/)
   - Busca (/busca)
   - Perfil (/perfil/prof-001)
   - Sobre (/sobre)
   - Planos (/planos)

---

## Próximos Passos

Depois do deploy:

1. **Copie as 3 URLs**
2. **Teste todas as páginas**
3. **Compartilhe com stakeholders** usando o email template em PROXIMOS_PASSOS.md
4. **Aguarde feedback** para escolher a versão final

---

## Troubleshooting

### "Build Failed"
- Verifique se selecionou o Root Directory correto (apps/v1, apps/v2, ou apps/v3)
- Node.js deve ser 20.x (padrão)

### "Repository not found"
- Certifique-se que o Vercel tem acesso ao repositório GitHub
- Vá em: Vercel Dashboard → Settings → Git → Reconnect GitHub

### "Wrong directory structure"
- O Root Directory DEVE ser:
  - V1: `apps/v1`
  - V2: `apps/v2`
  - V3: `apps/v3`

---

**Tempo estimado:** 10-15 minutos para as 3 versões
**Próximo arquivo:** PROXIMOS_PASSOS.md (email para stakeholders)
