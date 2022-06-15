import webview
import webbrowser


if __name__ == '__main__':
    gui_window: webview.Window = webview.create_window("DALL-E - GUI by Fido_de07#9227", "src/target.html", height=650,
                                                       width=1100)
    webbrowser.open("https://colab.research.google.com/github/saharmor/dalle-playground/blob/main/backend"
                    "/dalle_playground_backend.ipynb")
    webview.start(debug=True)
