# Deploy Rápido - 10 Minutos

O código está no GitHub: https://github.com/anderson25rj/TeleObra24h

Agora só falta fazer o deploy no Vercel.

## Passo a Passo

### 1. Acesse o Vercel
https://vercel.com/anderson25-7334s-projects

### 2. Importe do GitHub (para cada versão)

**IMPORTANTE:** Você vai repetir este processo 3 VEZES (uma para cada versão)

#### Para V1:
1. Click "Add New..." → "Project"
2. Encontre "anderson25rj/TeleObra24h"
3. Click "Import"
4. Configure:
   - **Project Name:** `teleobra24h-v1`
   - **Root Directory:** `apps/v1` ← **MUDE AQUI!**
   - Framework: Next.js (deixar padrão)
   - Build Command: deixar padrão
   - Output Directory: deixar padrão
5. Click "Deploy"
6. **COPIE A URL** que aparece depois

#### Para V2:
1. Volte ao dashboard
2. Click "Add New..." → "Project"
3. Encontre "anderson25rj/TeleObra24h" novamente
4. Click "Import"
5. Configure:
   - **Project Name:** `teleobra24h-v2`
   - **Root Directory:** `apps/v2` ← **MUDE AQUI!**
6. Click "Deploy"
7. **COPIE A URL**

#### Para V3:
1. Volte ao dashboard
2. Click "Add New..." → "Project"
3. Encontre "anderson25rj/TeleObra24h" novamente
4. Click "Import"
5. Configure:
   - **Project Name:** `teleobra24h-v3`
   - **Root Directory:** `apps/v3` ← **MUDE AQUI!**
6. Click "Deploy"
7. **COPIE A URL**

### 3. URLs Finais

Após completar, você terá:
- V1: https://teleobra24h-v1.vercel.app (ou similar)
- V2: https://teleobra24h-v2.vercel.app (ou similar)
- V3: https://teleobra24h-v3.vercel.app (ou similar)

### 4. Testar

Abra cada URL e teste:
- Home (/)
- Busca (/busca)
- Perfil (/perfil/prof-001)
- Sobre (/sobre)
- Planos (/planos)

---

## Troubleshooting

**"Repository not found"**
- Certifique-se que o Vercel tem acesso ao seu GitHub
- Vá em: Settings → Git → Reconnect GitHub

**"Build failed"**
- Verifique se escolheu o Root Directory correto:
  - V1: apps/v1
  - V2: apps/v2
  - V3: apps/v3

**"Wrong framework"**
- Deve detectar Next.js automaticamente
- Se não, selecione Next.js manualmente

---

**Tempo estimado:** 10 minutos (2-3 minutos por versão)
