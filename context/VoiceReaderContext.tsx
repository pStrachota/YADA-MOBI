import {createContext, ReactNode, useCallback, useContext, useMemo, useState} from "react";


interface VoiceReaderState {

    reader: boolean;
    readerType: VoiceReaderType;
    isEnabled: boolean;
    toggleVoiceReader: () => void;
    setVoiceReaderType: (voiceReaderType: VoiceReaderType) => void;

}

export const VoiceReaderContext = createContext<VoiceReaderState>({
    reader: false,
    readerType: 'disabled',
    isEnabled: false,
    toggleVoiceReader: () => {

    },
    setVoiceReaderType: (voiceReaderType: VoiceReaderType) => {

    }
});

export type VoiceReaderType = 'enabled' | 'disabled';

export const VoiceReaderProvider = ({children}: { children: ReactNode }) => {

        const [voiceReaderType, setVoiceReaderType] = useState<VoiceReaderType>('disabled');

        const toggleVoiceReader = useCallback(() => {
            setVoiceReaderType(prev => (prev === 'disabled' ? 'enabled' : 'disabled'));
        }, []);

        const isEnabled = useMemo(() => voiceReaderType === 'enabled', [voiceReaderType]);
        const reader = useMemo(
            () => (isEnabled ? true : false),
            [isEnabled],
        );


        return (
            <VoiceReaderContext.Provider value={
                {
                    reader,
                    readerType: voiceReaderType,
                    isEnabled,
                    setVoiceReaderType,
                    toggleVoiceReader
                }
            }>
                {children}
            </VoiceReaderContext.Provider>
        );
}

export const useVoiceReaderState = () => {
    const context = useContext(VoiceReaderContext);
    if (context === undefined) {
        throw new Error('useVoiceReaderState must be used within a VoiceReaderProvider');
    }
    return context;
}
