# VS Code 개인 설정 백업

- `settings.json` — 사용자 설정 (`%APPDATA%\Code\User\settings.json`)
  - 공개 저장소라 `remote.SSH.remotePlatform`(서버 주소)은 제외함
- `extensions.txt` — 설치 확장 목록

## 복원 (Windows, Git Bash)

```bash
cp vscode-settings/settings.json "$APPDATA/Code/User/settings.json"
cat vscode-settings/extensions.txt | xargs -n 1 code --install-extension
```

## 갱신

```bash
sed '/"remote.SSH.remotePlatform"/,/^  },$/d' "$APPDATA/Code/User/settings.json" > vscode-settings/settings.json
code --list-extensions > vscode-settings/extensions.txt
```
